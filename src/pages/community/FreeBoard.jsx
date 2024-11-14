import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Boardstyled";
import PostListItem from "../../components/common/list/PostListItem";
import backward from "/images/Backward.svg"
import write from "/images/adding_write.svg"
import now from "/images/write_location.svg"
import arrowIcon from "/images/arrow.svg"

function FreeBoard() {
    const navigate = useNavigate();
    const [activeSort, setActiveSort] = useState("최신순"); // 초기 정렬 상태

    const handleSortClick = (sortType) => {
        setActiveSort(sortType); // 클릭한 정렬 버튼 활성화 상태로 변경
    };

    const [currentAddress, setCurrentAddress] = useState("위치 정보를 불러오는 중...");


    useEffect(() => {
        // 네이버 지도 스크립트를 동적으로 로드합니다.
        const loadNaverMapScript = () => {
            return new Promise((resolve) => {
                if (window.naver) {
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NAVER_MAP_KEY}&submodules=geocoder`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        };

        // 스크립트를 로드하고 현재 위치 주소를 설정합니다.
        loadNaverMapScript().then(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        const coord = new naver.maps.LatLng(latitude, longitude);

                        // 역지오코딩 (현재 위치 주소 가져오기)
                        naver.maps.Service.reverseGeocode(
                            { coords: coord, orders: ["addr"] },
                            (status, response) => {
                                if (status === naver.maps.Service.Status.OK) {
                                    const result = response.v2.address;
                                    const fullAddress = result?.jibunAddress || result?.roadAddress || "주소를 찾을 수 없습니다.";
                                    const addressParts = fullAddress.split(" ");
                                    const dongAddress = addressParts.slice(0, 3).join(" ");
                                    setCurrentAddress(dongAddress); // 주소 상태 업데이트
                                } else {
                                    console.error("주소 변환 실패 :", status);
                                    setCurrentAddress("주소를 가져올 수 없습니다.");
                                }
                            }
                        );
                    },
                    (error) => {
                        console.error("위치 정보를 가져오는 데 실패했습니다:", error);
                        setCurrentAddress("위치 정보를 가져올 수 없습니다.");
                    }
                );
            } else {
                setCurrentAddress("위치 정보를 사용할 수 없습니다.");
            }
        });
    }, []);
    
    return (
        <S.Container>
            {/* Header Section */}
            <S.Header>
                <S.BackButton onClick={() => navigate(-1)}>
                    <img src={backward} style={{ cursor: "pointer"}}/>
                </S.BackButton>
                <S.Title>우동친</S.Title>
            </S.Header>
            {/* Location Section */}
            <S.Nav>
                <S.Subtitle>자유게시판</S.Subtitle>
                <S.Location>
                    <img src={now} style={{ cursor: "pointer", padding: "0"}}/>
                    <S.LocationText>{currentAddress}</S.LocationText>
                </S.Location>
            </S.Nav>
            <S.subNav>
                지도에 표기된 실시간 우동친이 함께 게시물 형식으로 업로드됩니다.
            </S.subNav>
            <S.Bar>
                <S.Sortlist>
                    <S.SortButton 
                    active={activeSort === "최신순"} 
                    onClick={() => handleSortClick("최신순")}
                    >
                        <img src={arrowIcon} alt="정렬 아이콘" />
                        <span>최신순</span>
                    </S.SortButton>
                    <S.SortButton 
                        active={activeSort === "좋아요순"} 
                        onClick={() => handleSortClick("좋아요순")}
                    >
                        <img src={arrowIcon} alt="정렬 아이콘" />
                        <span>좋아요순</span>
                    </S.SortButton>
                    <S.SortButton 
                        active={activeSort === "댓글순"} 
                        onClick={() => handleSortClick("댓글순")}
                    >
                        <img src={arrowIcon} alt="정렬 아이콘" />
                        <span>댓글순</span>
                    </S.SortButton>
                </S.Sortlist>
                <S.WriteButton onClick={() => navigate("/postwrite")}>
                    <S.WriteText>글쓰기</S.WriteText>
                    <img src={write} style={{ cursor: "pointer", padding: "0"}}/>
                </S.WriteButton>
            </S.Bar>
            <S.Main>
            <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
            <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
            <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
            <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
            <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
            </S.Main>
        </S.Container>
    );
}

export {FreeBoard};
