import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Nowlocations from "/images/nowlocation.svg"


export const MapSelector = ({ onConfirm }) => {
  const NAVER_MAP_KEY = import.meta.env.VITE_NAVER_MAP_KEY;
  
  const [map, setMap] = useState(null);
  const [centerCoords, setCenterCoords] = useState(null);
  const [region, setRegion] = useState("없음");
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_KEY}&submodules=geocoder`;
    script.async = true;

    script.onload = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const initialCoords = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
          const mapInstance = new naver.maps.Map("map", {
            center: initialCoords,
            zoom: 15,
          });
          setMap(mapInstance);
          setCenterCoords(initialCoords);
        },
        (error) => console.error("Error fetching location:", error)
      );
    };

    document.head.appendChild(script);
  }, []);

  // 지도 움직임 감지하여 중심 좌표 업데이트
  useEffect(() => {
    if (map) {
      const handleMapCenterChange = () => {
        const newCenter = map.getCenter();
        setCenterCoords(newCenter);
      };
      naver.maps.Event.addListener(map, "dragend", handleMapCenterChange);
      naver.maps.Event.addListener(map, "zoom_changed", handleMapCenterChange);
    }
  }, [map]);

  // "여기로 고정하기" 버튼 클릭 시
  const handleFixLocation = () => {
    if (!centerCoords || !map) return;

    // 행정구역 정보 가져오기
    fetchRegionInfo(centerCoords);

    // 고정된 좌표에 핀 추가
    if (marker) {
      marker.setMap(null); // 기존 마커 제거
    }
    const newMarker = new naver.maps.Marker({
      position: centerCoords,
      map: map,
      icon: Nowlocations,
    });
    setMarker(newMarker);

    // 부모 컴포넌트에 고정된 좌표 전달
    onConfirm({ lat: centerCoords.lat(), lng: centerCoords.lng() });
  };

  // 행정구역 정보를 가져오는 함수
  const fetchRegionInfo = (coords) => {
    naver.maps.Service.reverseGeocode(
      {
        coords: coords,
        orders: [naver.maps.Service.OrderType.ADDR],
      },
      (status, response) => {
        if (status === naver.maps.Service.Status.OK) {
          const result = response.v2.address;
          const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";

          // '동'까지만 추출하여 주소 설정
          const addressParts = fullAddress.split(" ");
          const dongAddress = addressParts.slice(0, 3).join(" ");
          setRegion(dongAddress);
        } else {
          console.error("Reverse geocoding failed:", status);
        }
      }
    );
  };

  return (
    <S.Wrapper>
      <div id="map" style={{ width: "100%", height: "320px", marginBottom: "10px" }} />
      <S.Notice>동물을 목격했던 장소를 핀으로 고정해주세요.</S.Notice>
      <S.Location>고정 위치: {region}</S.Location>
      <S.FixButton onClick={handleFixLocation}>목격 위치 고정</S.FixButton>
    </S.Wrapper>
  );
};
