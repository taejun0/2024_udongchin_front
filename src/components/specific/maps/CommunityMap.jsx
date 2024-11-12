import * as S from "./styled";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "@contexts/LocationContext";

import nowimageDefault from "/images/nowlocation.svg";
import currentLocationImage from "/images/currentLocationImage.svg";

export const CommunityMap = ({ locations }) => {
  const NAVER_MAP_KEY = import.meta.env.VITE_NAVER_MAP_KEY;

  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const { setLocation } = useLocation();
  const currentMarkerRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const mapInstance = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5665, 126.9780),
        zoom: 15,
      });
      setMap(mapInstance);

      // 현재 위치 표시
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const coord = new naver.maps.LatLng(lat, lng);

            setCurrentPosition(coord);
            setLocation(coord);
            

            // 현재 위치 마커 추가
            const currentMarker = new naver.maps.Marker({
              position: coord,
              map: mapInstance,
              icon: {
                url: currentLocationImage,
                size: new naver.maps.Size(50, 50),
                anchor: new naver.maps.Point(25, 25),
              },
            });
            currentMarkerRef.current = currentMarker;
          },
          (error) => {
            console.error("Error fetching current location:", error);
          }
        );
      }

      // 커뮤니티 위치 마커 추가
      if (Array.isArray(locations)) {
        locations.forEach((location, index) => {
          if (!location.locations || !Array.isArray(location.locations)) {
            return; // coordinates가 없거나 배열이 아닌 경우 해당 마커 생성을 건너뜁니다.
          }

          const [lat, lng] = location.locations; // 커뮤니티 위치 좌표
          const coord = new naver.maps.LatLng(lat, lng);
          mapInstance.setCenter(coord);


          const markerPosition = new naver.maps.LatLng(parseFloat(lat), parseFloat(lng));
          const marker = new naver.maps.Marker({
            position: markerPosition,
            map: mapInstance,
            icon: {
              content: `
                <div style="
                  position: relative; 
                  width: 40px; 
                  height: 50px; 
                  background-image: url('/images/marker_sengtae.svg');
                  background-size: cover;
                  transform: translateY(-31px);
                  filter: drop-shadow(0px 0px 10px #FFFC76);
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
        });
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
  }, [locations]);

  return <S.MapSize id="map" />;
};
