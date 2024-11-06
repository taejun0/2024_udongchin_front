import * as S from "./styled";
import { useEffect, useState, useRef } from "react";
import { NaverDetailModal } from "@components/common/modals/NaverdetailModal";
import { useLocation } from "@contexts/LocationContext";
import nowimageDefault from "/images/nowlocation.svg";
import nowimageChanged from "/images/nowlocation_ch.svg";

const backgroundIcons = {
  "Q&A": "/images/marker_qna.svg",
  "Community": "/images/marker_real.svg",
  "Urgent": "/images/marker_urgent.svg",
};

export const Navermap = ({ locations, onMapReady, followUser, setFollowUser }) => {
  const NAVER_MAP_KEY = import.meta.env.VITE_NAVER_MAP_KEY;

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const { setLocation, address, setAddress } = useLocation();
  const [currentAddress, setCurrentAddress] = useState(null);
  const [nowimage, setNowImage] = useState(nowimageDefault);
  
  const circleRef = useRef(null); // 원을 useRef로 관리

  // 지도 초기화 및 마커 설정
  useEffect(() => {
    const loadMap = () => {
      const mapInstance = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5665, 126.9780),
        zoom: 15,
      });
      setMap(mapInstance);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const coord = new naver.maps.LatLng(lat, lng);

            setCurrentPosition(coord);
            setLocation(coord);
            mapInstance.setCenter(coord);
            mapInstance.setZoom(18);

            // 현재 위치 주소 설정
            naver.maps.Service.reverseGeocode(
              { coords: coord, orders: ["addr"] },
              (status, response) => {
                if (status === naver.maps.Service.Status.OK) {
                  const result = response.v2.address;
                  const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
                  const addressParts = fullAddress.split(" ");
                  const dongAddress = addressParts.slice(0, 3).join(" ");
                  setCurrentAddress(dongAddress);
                } else {
                  console.error("Reverse geocoding failed:", status);
                }
              }
            );

            if (onMapReady && typeof onMapReady === "function") {
              onMapReady(() => {
                mapInstance.setCenter(coord);
                updateAddressByCenter();
              });
            }

            // 현재 위치 마커와 원 생성
            const currentMarker = new naver.maps.Marker({
              position: coord,
              map: mapInstance,
              icon: {
                url: "/images/currentLocationImage.svg",
                size: new naver.maps.Size(50, 50),
                anchor: new naver.maps.Point(28, 28),
              },
            });

            // 원 생성 후 ref로 저장
            const userCircle = new naver.maps.Circle({
              map: mapInstance,
              center: coord,
              radius: 100,
              strokeColor: "#radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(218, 218, 218, 0.05) 100%)",
              strokeOpacity: 0.8,
              strokeWeight: 1,
              fillColor: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(218, 218, 218, 0.05) 100%)",
              fillOpacity: 0.1,
            });
            circleRef.current = userCircle; // circle 객체를 useRef에 저장

            const updateAddressByCenter = () => {
              const center = mapInstance.getCenter();
              naver.maps.Service.reverseGeocode(
                { coords: center, orders: ["addr"] },
                (status, response) => {
                  if (status === naver.maps.Service.Status.OK) {
                    const result = response.v2.address;
                    const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
                    const addressParts = fullAddress.split(" ");
                    const dongAddress = addressParts.slice(0, 3).join(" ");
                    setAddress(dongAddress);

                    setNowImage(dongAddress === currentAddress ? nowimageChanged : nowimageDefault);
                  } else {
                    console.error("Reverse geocoding failed:", status);
                  }
                }
              );
            };

            updateAddressByCenter();
            naver.maps.Event.addListener(mapInstance, "dragend", updateAddressByCenter);
            naver.maps.Event.addListener(mapInstance, "zoom_changed", updateAddressByCenter);

            naver.maps.Event.addListener(mapInstance, "dragstart", () => {
              setFollowUser(false);
            });
            naver.maps.Event.addListener(mapInstance, "zoom_changed", () => {
              setFollowUser(false);
            });

            const syncCircleWithMarker = () => {
              if (circleRef.current) {
                circleRef.current.setCenter(currentMarker.getPosition());
              }
            };
            naver.maps.Event.addListener(mapInstance, "zoom_changed", syncCircleWithMarker);
            naver.maps.Event.addListener(mapInstance, "dragend", syncCircleWithMarker);

            // 외부 위치 데이터 마커 추가
            if (Array.isArray(locations)) {
              locations.forEach((location) => {
                const markerPosition = new naver.maps.LatLng(location.lat, location.lng);
                const backgroundUrl = backgroundIcons[location.type === "Q&A" ? (location.urgent ? "Urgent" : "Q&A") : "Community"];

                const marker = new naver.maps.Marker({
                  position: markerPosition,
                  map: mapInstance,
                  icon: {
                    content: `
                      <div style="
                        position: relative; 
                        width: 40px; 
                        height: 50px; 
                        background-image: url('${backgroundUrl}');
                        background-size: cover;
                        transform: translateY(-31px);
                        ${backgroundUrl === backgroundIcons["Urgent"] ? "filter: drop-shadow(0px 0px 10px #FF8B8D);" : ""}
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
                    anchor: new naver.maps.Point(20, 20),
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
      }
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_KEY}&submodules=geocoder`;
    script.async = true;
    script.onload = loadMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [locations, onMapReady, currentAddress]);

  // 실시간 위치 추적
  useEffect(() => {
    let watchId;
    if (map && followUser && navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const coord = new naver.maps.LatLng(lat, lng);

          setCurrentPosition(coord);
          setLocation(coord);
          map.setCenter(coord);

          // 사용자의 새로운 위치로 원(center)을 업데이트
          if (circleRef.current) {
            circleRef.current.setCenter(coord);
          }
        },
        (error) => {
          console.error("Error watching location:", error);
        },
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [followUser, map]);

  return (
    <S.MapSize id="map">
      <S.Nowlocation>
        <S.Address><S.Image src={nowimage} />{address}</S.Address>
      </S.Nowlocation>
      {selectedLocation && (
        <NaverDetailModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
    </S.MapSize>
  );
};
