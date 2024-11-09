import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MainStyle";
import PostListItem from "../../components/common/list/PostListItem";
import frontward from "/images/Frontward.svg"
import nowimage from "/images/nowlocation.svg";
import backward from "/images/Backward.svg"

function MainPage() {
    const navigate = useNavigate();
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
                <S.Location><img src={nowimage} style={{ marginRight: "6px"}} />{currentAddress}</S.Location>
                <S.Subtitle>우리 동네 커뮤니티</S.Subtitle>
            </S.Nav>

            {/* Main Content Section */}
            <S.MainContent>
                {/* 전체게시판 Section */}
                <S.SectionContainer>
                    <S.SectionHeader>
                        <S.TitleBoard>자유게시판</S.TitleBoard>
                        <S.ArrowButton onClick={() => navigate("/freeboard")}>
                        <img src={frontward} style={{ cursor: "pointer", padding: "0"}}/>
                        </S.ArrowButton>
                    </S.SectionHeader>
                    <S.Description>지도에 표기된 실시간 우동친이 함께 게시물 형식으로 업로드됩니다.</S.Description>
                </S.SectionContainer>
                <S.Content>
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                </S.Content>
                {/* 자유게시판 Section */}
                <S.SectionContainer>
                    <S.SectionHeader>
                        <S.TitleBoard>홍보게시판</S.TitleBoard>
                        <S.ArrowButton onClick={() => navigate("/prboard")}>
                        <img src={frontward} style={{ cursor: "pointer", padding: "0"}}/>
                        </S.ArrowButton>
                    </S.SectionHeader>
                </S.SectionContainer>
                <S.Content>
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                </S.Content>
                {/* Help Section */}
                <S.HelpContainer>
                    <S.HelpSection>도움이 필요한 동물을 발견하셨나요?</S.HelpSection>
                    <S.Center>
                    <S.ArrowButton2 onClick={() => window.location.href = "https://www.ansan.go.kr/eco/common/cntnts/selectContents.do?cntnts_id=C0001026"}>
                        <S.HelpText>가까운 야생동물 보호센터 신고하기</S.HelpText>
                        <img src={frontward} style={{ cursor: "pointer", padding: "0" }} />
                    </S.ArrowButton2>
                        <S.Description2>우리 동네 친구들을 도와주세요</S.Description2>
                    </S.Center>
                </S.HelpContainer>
            </S.MainContent>
        </S.Container>
    );
}

export {MainPage};
