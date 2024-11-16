import * as S from "./styled";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "@contexts/LocationContext";
import { fetchImageUrls } from "@services/locationImageService";

import { NaverDetailModal } from "@components/common/modals/NaverdetailModal";
import { MapModal } from "@components/common/modals/MapModal";
import { WarningLoginModal } from "@components/common/modals/WarningLoginModal";

import Toast1 from "@components/common/Toasts/Toast1";
import Toast2 from "@components/common/Toasts/Toast2";

import nowimageDefault from "/images/nowlocation.svg";
import nowimageChanged from "/images/nowlocation_ch.svg";

import { getRandomCoordinateForDong } from "@utils/coordinateUtils";


const backgroundIcons = {
  "실시간 Q&A": "/images/marker_qna.svg",
  "실시간 기록": "/images/marker_real.svg",
  "생태 지도": "/images/marker_sengtae.svg",
  "Urgent": "/images/marker_urgent.svg",
};

export const Navermap = ({ locationList, onMapReady, followUser, setFollowUser, viewtype, onDongAddress }) => {
  const NAVER_MAP_KEY = import.meta.env.VITE_NAVER_MAP_KEY;

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const { setLocation, address, setAddress } = useLocation();
  const [currentAddress, setCurrentAddress] = useState(null);
  const [nowimage, setNowImage] = useState(nowimageDefault);
  const [markerImages, setMarkerImages] = useState({});
  
  const circleRef = useRef(null); // 원을 useRef로 관리
  const currentMarkerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageMap = await fetchImageUrls(locationList);
        setMarkerImages(imageMap);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
  
    loadImages();

    return () => {
      Object.values(markerImages).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [locationList]);

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

            naver.maps.Service.reverseGeocode(
              { coords: coord, orders: "addr" },
              (status, response) => {
                if (status === naver.maps.Service.Status.OK) {
                  const result = response.v2.address;
                  const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
                  const addressParts = fullAddress.split(" ");
                  const dongAddress = addressParts.slice(0, 3).join(" ");
                  setCurrentAddress(dongAddress);
                  onDongAddress(lat, lng, dongAddress);
                } else {
                  console.error("Reverse geocode failed:", status);
                }
              }
            );

            if (onMapReady && typeof onMapReady === "function") {
              onMapReady(mapInstance, coord);
            }

            const currentMarker = new naver.maps.Marker({
              position: coord,
              map: mapInstance,
              icon: {
                url: "/images/currentLocationImage.svg",
                size: new naver.maps.Size(50, 50),
                anchor: new naver.maps.Point(28, 28),
              },
            });
            currentMarkerRef.current = currentMarker;

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
            circleRef.current = userCircle;

            const updateAddressByCenter = () => {
              const center = mapInstance.getCenter();
              naver.maps.Service.reverseGeocode(
                { coords: center, orders: "addr" },
                (status, response) => {
                  if (status === naver.maps.Service.Status.OK) {
                    const result = response.v2.address;
                    const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
                    const addressParts = fullAddress.split(" ");
                    const dongAddress = addressParts.slice(0, 3).join(" ");
                    setAddress(dongAddress);

                    setNowImage(dongAddress === currentAddress ? nowimageChanged : nowimageDefault);
                  } else {
                    console.error("Reverse geocode failed:", status);
                  }
                }
              );
            };

            updateAddressByCenter();
            naver.maps.Event.addListener(mapInstance, "dragend", updateAddressByCenter);
            naver.maps.Event.addListener(mapInstance, "zoom_changed", updateAddressByCenter);

            naver.maps.Event.addListener(mapInstance, "dragstart", () => setFollowUser(false));
            naver.maps.Event.addListener(mapInstance, "zoom_changed", () => setFollowUser(false));

            const syncCircleWithMarker = () => {
              if (circleRef.current) {
                circleRef.current.setCenter(currentMarker.getPosition());
              }
            };
            naver.maps.Event.addListener(mapInstance, "zoom_changed", syncCircleWithMarker);
            naver.maps.Event.addListener(mapInstance, "dragend", syncCircleWithMarker);

            // data 필드로 마커 생성
            if (locationList && Array.isArray(locationList)) {
              locationList.forEach((location, index) => {
                const { location: coords, mode, imageUrl, urgent } = location;
                if (!Array.isArray(coords)) {
                  console.error(`Invalid location data at index ${index}:`, location);
                  return;
                }

                let [lat, lng, dongAddress] = coords;

                if (mode === "생태 지도") {
                  if (!location.randomCoordinate) {
                    const randomCoordinate = getRandomCoordinateForDong(dongAddress);
                    if (randomCoordinate) {
                      location.randomCoordinate = randomCoordinate;
                    } else {
                      console.warn(`Random coordinate not found for dongAddress: ${dongAddress}`);
                      return;
                    }
                  }

                  [lat, lng, dongAddress] = location.randomCoordinate;
                }

                const markerPosition = new naver.maps.LatLng(parseFloat(lat), parseFloat(lng));
                const backgroundUrl =
                  backgroundIcons[
                    mode === "생태 지도"
                      ? "생태 지도"
                      : mode === "실시간 Q&A"
                      ? urgent
                        ? "Urgent"
                        : "실시간 Q&A"
                      : "실시간 기록"
                  ];

                const displaying =
                  mode === "실시간 Q&A" ||
                  (mode === "실시간 기록" && dongAddress === currentAddress) ||
                  mode === "생태 지도";

                if (displaying) {
                  const imageUrl = location.imageUrl;
                  
                  const markerImageUrl = location.mode === "생태 지도" ? imageUrl : markerImages[imageUrl] || "/images/default-marker.png";

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
                          <img src="${markerImageUrl}" alt="marker" style="
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
                }
              });
            } else {
              console.warn("locationList data is not an array or is empty."); // 데이터가 비어있음
            }
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
  }, [locationList, markerImages, onMapReady, currentAddress]);

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
          map.panTo(coord);

          if (currentMarkerRef.current) {
            currentMarkerRef.current.setPosition(coord);
          }

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
      { viewtype === "전체" ? (
         address === currentAddress ? (
          <S.Nowlocation>
            <S.Address><S.Image src={nowimage} />{address}</S.Address>
            <Toast1 />
          </S.Nowlocation>
        ) : (
          <S.Nowlocation>
            <S.Address><S.Image src={nowimageDefault} />{address}</S.Address>
            <Toast2 />
          </S.Nowlocation>
        )
      ) : (
        <S.Nowlocation>
          <S.Address><S.Image src={nowimageDefault} />내 우동친 지도</S.Address>
        </S.Nowlocation>
      )}
      

      {selectedLocation && (
        selectedLocation.mode === "생태 지도" ? (
          <>
            <MapModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
          </>
        ) : (
          <NaverDetailModal location={selectedLocation} markerImages={markerImages} onClose={() => setSelectedLocation(null)} />
        )
      )}
    </S.MapSize>
    
  );
};
