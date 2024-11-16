import * as S from "./styled";
import { useEffect, useState } from "react";
import { KakaodetailModal } from "@components/common/modals/KakaodetailModal";

export const Kakaomap = ({ locations }) => {
const [address, setAddress] = useState("");
const [selectedLocation, setSelectedLocation] = useState(null); // 선택된 위치 데이터

useEffect(() => {
  const script = document.createElement("script");
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b667c0b8c83ee09a5b042c68e042f1c5&autoload=false&libraries=services`; // 실제 API 키로 변경
  script.async = true;

  script.onload = () => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const coord = new window.kakao.maps.LatLng(lat, lng);

            const mapContainer = document.getElementById("map");
            const mapOption = {
              center: coord,
              level: 3,
            };
            const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);

            // 현 위치 마커 설정
            const currentMarkerImage = new window.kakao.maps.MarkerImage(
              "/images/currentLocationImage.svg",
              new window.kakao.maps.Size(40, 40), // 마커 이미지 크기
              { offset: new window.kakao.maps.Point(20, 20) } // 이미지 중심을 마커 중심으로 설정
            );

            const currentMarker = new window.kakao.maps.Marker({
              position: coord,
              map: kakaoMap,
              image: currentMarkerImage, // 현 위치 마커 이미지 적용
            });

            const circle = new window.kakao.maps.Circle({
              center: coord, // 원의 중심을 현 위치로 설정
              radius: 200, // 반경 (단위: 미터)
              strokeWeight: 1, // 선의 두께
              strokeColor: "#000000", // 선 색상
              strokeOpacity: 0.8, // 선의 투명도
              strokeStyle: "solid", // 선 스타일
              fillColor: "#FFB6C1", // 채우기 색상
              fillOpacity: 0.4, // 채우기 투명도
            });

            circle.setMap(kakaoMap); // 원을 지도에 표시

            geocoder.coord2RegionCode(lng, lat, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                setAddress(result[0].address_name);
              }
            });

            // locations 배열의 각 위치에 마커 추가
            if (Array.isArray(locations)) {
              locations.forEach((location) => {
                const markerPosition = new window.kakao.maps.LatLng(location.lat, location.lng);

                // 데이터용 마커 이미지 설정
                const dataMarkerImage = new window.kakao.maps.MarkerImage(
                  location.imageUrl, // 데이터 이미지 URL
                  new window.kakao.maps.Size(40, 40), // 이미지 크기
                  { offset: new window.kakao.maps.Point(20, 20) } // 이미지 중심을 마커 중심으로 설정
                );

                const marker = new window.kakao.maps.Marker({
                  position: markerPosition,
                  map: kakaoMap,
                  image: dataMarkerImage, // 데이터용 마커 이미지 적용
                });

                // 마커 클릭 시 모달 열기 및 정보 설정
                window.kakao.maps.event.addListener(marker, "click", () => {
                  setSelectedLocation(location); // 클릭한 위치의 데이터를 selectedLocation에 설정
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
    });
  };

  document.head.appendChild(script);
}, [locations]);

return (
  <S.MapSize id="map">
    <S.Nowlocation>
      <p>{address}</p>
    </S.Nowlocation>
    {selectedLocation && (
      <KakaodetailModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    )}
  </S.MapSize>
);
};
