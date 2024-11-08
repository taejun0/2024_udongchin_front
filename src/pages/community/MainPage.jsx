import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MainStyle";
import PostListItem from "../../components/common/list/PostListItem";
import frontward from "/images/Frontward.svg"
import backward from "/images/Backward.svg"

function MainPage() {
    const navigate = useNavigate();

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
                <S.Location>📍 서울시 중구 신당동</S.Location>
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
                        <S.ArrowButton2 onClick={() => navigate("/fullboard")}>
                        <S.HelpText>가까운 야생동물 보호센터 신고하기</S.HelpText>
                        <img src={frontward} style={{ cursor: "pointer", padding: "0"}}/>
                        </S.ArrowButton2>
                        <S.Description2>우리 동네 친구들을 도와주세요</S.Description2>
                    </S.Center>
                </S.HelpContainer>
            </S.MainContent>
        </S.Container>
    );
}

export {MainPage};
