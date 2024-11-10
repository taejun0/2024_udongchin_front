import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Boardstyled";
import PostListItem from "../../components/common/list/PostListItem";
import backward from "/images/Backward.svg"
import write from "/images/adding_write.svg"
import now from "/images/write_location.svg"
import arrowIcon from "/images/arrow.svg"

function PrBoard() {
    const navigate = useNavigate();
    const [activeSort, setActiveSort] = useState("최신순"); // 초기 정렬 상태

    const handleSortClick = (sortType) => {
        setActiveSort(sortType); // 클릭한 정렬 버튼 활성화 상태로 변경
    };
    
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
                <S.Subtitle>홍보게시판</S.Subtitle>
                <S.Location>
                    <img src={now} style={{ cursor: "pointer", padding: "0"}}/>
                    <S.LocationText>위치</S.LocationText>
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

export {PrBoard};
