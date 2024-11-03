import * as S from "./styled";
import { useEffect, useState } from "react";
import { NaverDetailModal } from "@components/common/modals/NaverDetailModal";
import { useLocation } from "@contexts/LocationContext";
import nowimage from "/images/nowlocation.svg";

const backgroundIcons = {
  "Q&A": "/images/marker_qna.svg",
  "Community": "/images/marker_real.svg",
};

export const Navermap = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const { setLocation, address, setAddress } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rkbjpprez5&submodules=geocoder`;
    script.async = true;

    script.onload = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5665, 126.9780),
        zoom: 15,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const coord = new naver.maps.LatLng(lat, lng);

            setCurrentPosition(coord);
            setLocation(coord);
            map.setCenter(coord);
            map.setZoom(18);

            // 마커 생성
            const currentMarker = new naver.maps.Marker({
              position: coord,
              map: map,
              icon: {
                url: "/images/currentLocationImage.svg",
                size: new naver.maps.Size(50, 50),
                anchor: new naver.maps.Point(28, 28),
              },
            });

            // 원 생성
            const circle = new naver.maps.Circle({
              map: map,
              center: coord,
              radius: 100,
              strokeColor: "#radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(218, 218, 218, 0.05) 100%)",
              strokeOpacity: 0.8,
              strokeWeight: 1,
              fillColor: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(218, 218, 218, 0.05) 100%)",
              fillOpacity: 0.1,
            });

            const updateAddressByCenter = () => {
              const center = map.getCenter();
      
              naver.maps.Service.reverseGeocode(
                {
                  coords: center,
                  orders: [naver.maps.Service.OrderType.ADDR],
                },
                (status, response) => {
                  if (status === naver.maps.Service.Status.OK) {
                    const result = response.v2.address;
                    const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
      
                    // '동'까지만 추출하여 주소 설정
                    const addressParts = fullAddress.split(" ");
                    const dongAddress = addressParts.slice(0, 3).join(" "); // 시, 구, 동까지만 포함
                    setAddress(dongAddress);
                  } else {
                    console.error("Reverse geocoding failed:", status);
                  }
                }
              );
            };
            updateAddressByCenter();
            naver.maps.Event.addListener(map, "dragend", updateAddressByCenter);
            naver.maps.Event.addListener(map, "zoom_changed", updateAddressByCenter);


            // 확대/축소 및 지도 이동 시 원을 마커 위치로 고정
            const syncCircleWithMarker = () => {
              const center = currentMarker.getPosition();
              circle.setCenter(center); // 원의 중심을 마커의 위치로 동기화
            };

            naver.maps.Event.addListener(map, "zoom_changed", syncCircleWithMarker);
            naver.maps.Event.addListener(map, "dragend", syncCircleWithMarker);

            if (Array.isArray(locations)) {
              locations.forEach((location) => {
                const markerPosition = new naver.maps.LatLng(location.lat, location.lng);
                const backgroundUrl = backgroundIcons[location.type];


                const marker = new naver.maps.Marker({
                  position: markerPosition,
                  map: map,
                  icon: {
                    content: `
                      <div style="
                        position: relative; 
                        width: 40px; 
                        height: 50px; 
                        background-image: url('${backgroundUrl}');
                        background-size: cover;
                        transform: translateY(-31px);
                      ">
                        <img src="${location.imageUrl}" alt="marker" style="
                          display: flex;
                          position: absolute;
                          left: 6px;
                          top: 6px;
                          width: 28px; 
                          height: 28px; 
                          border-radius: 50%;
                        " />
                      </div>
                    `,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20), // 다른 마커도 이미지 중심을 맞추기 위해 설정
                  },
                });

                naver.maps.Event.addListener(marker, "click", () => {
                  setSelectedLocation(location);
                });
              });
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    document.head.appendChild(script);
  }, [locations]);

  return (
    <S.MapSize id="map">
      <S.Nowlocation>
        <S.Address><img src={nowimage} />{address}</S.Address>
      </S.Nowlocation>
      {selectedLocation && (
        <NaverDetailModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
    </S.MapSize>
  );
};
