// PostViewPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../../components/common/list/CommentList";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/MoveButton";
import ReportModal from "../../components/common/modals/ReportModal";
import backward from "/images/Backward.svg"

function PostViewPage(props) {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]); // 댓글 목록을 위한 상태 추가
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    // 댓글 작성 함수
    const handleCommentSubmit = () => {
        if (comment.trim() !== "") {
            const newComment = {
                id: comments.length + 1, // 고유 ID 설정 (예시)
                nickname: "사용자", // 예시 사용자명
                date: new Date().toLocaleDateString(), // 현재 날짜
                content: comment,
                likes: 0, // 초기 좋아요 수
            };
            setComments([...comments, newComment]); // 새로운 댓글 추가
            setComment(""); // 입력란 초기화
        }
    };

    // 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <img src={backward} style={{ cursor: "pointer"}}/>
                </BackButton>
                <Title>우동친</Title>
            </Header>
            <Nav>
                <BoardButton onClick={() => navigate("/postview")}>자유게시판</BoardButton>
            </Nav>
            <Main>
                <TitleText>
                    <TextTitle>제목</TextTitle>
                    <SubTitle>
                        <DateText>2024-10-25</DateText>
                        <ButtonGroup>
                            <CategoryButton>실시간</CategoryButton>
                            <ReportButton onClick={openModal}>신고하기</ReportButton>
                        </ButtonGroup> {/* 신고하기 버튼 클릭 시 모달 열기 */}
                    </SubTitle>
                </TitleText>
                <Thumbnail />
                <ContentText>내용</ContentText>
                <BottomBar>
                    <IconText>❤️ 좋아요 n개</IconText>
                    <IconText>💬 댓글 {comments.length}개</IconText>
                </BottomBar>
                <CommentContainer>
                    <TextInput
                        height={30}
                        placeholder="답변을 작성해주세요"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button
                        title="→"
                        onClick={handleCommentSubmit} // 댓글 작성 함수 연결
                    />
                </CommentContainer>
                <CommentList comments={comments} /> {/* 댓글 목록을 CommentList에 전달 */}
            </Main>

            {/* 모달 창 */}
            {isModalOpen && <ReportModal onConfirm={closeModal} onCancel={closeModal} />}
        </Container>
    );
}

// 스타일 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background-color: #fff;
`;

const Header = styled.header`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4caf50;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 14px;
    font-weight: 500;
    margin-right: 26px;
`;

const BackButton = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    color: #000000;
`;


const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 16px;
    justify-content: flex-start;
    margin-top:10px;
`;

const BoardButton = styled.button`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 100%;
`;

const TitleText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const TextTitle = styled.h1`
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 4px;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px; 
`;

const DateText = styled.p`
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #888;
    margin: 0;
`;

const CategoryButton = styled.button`
    border-radius: 4px;
    border: 1px solid #43CD5E;
    background-color: #FFF;
    color: #43CD5E;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 12px;
    padding: 4px 8px;
    cursor: pointer;
`;


const ReportButton = styled.button`
    background-color: #f2c94c;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    color: white;
    font-size: 12px;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 200px;
    background-color: #d9d9d9;
    border-radius: 8px;
    margin-bottom: 16px;
`;

const ContentText = styled.div`
    width: 100%;
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
    padding: 5px
`;

const BottomBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    color: #888;
    gap: 10px;
    margin-bottom: 16px;
`;

const IconText = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
`;

const CommentContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background: #f4f4f4;
    padding: 8px;
    border-radius: 8px;
`;

export { PostViewPage };
