import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import CommentList from "../../components/common/list/CommentList";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/MoveButton";
import DelModal from "../../components/common/modals/DeletePost";
import backward from "/images/Backward.svg";

function MyPostPage(props) {
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
        <S.Container>
            <S.Header>
                <S.BackButton onClick={() => navigate(-1)}>
                    <img src={backward} style={{ cursor: "pointer" }} />
                </S.BackButton>
                <S.Title>우동친</S.Title>
            </S.Header>
            <S.Nav>
                <S.BoardButton onClick={() => navigate("/postview")}>자유게시판</S.BoardButton>
            </S.Nav>
            <S.Main>
                <S.TitleText>
                    <S.TextTitle>제목</S.TextTitle>
                    <S.SubTitle>
                        <S.DateText>2024-10-25 작성</S.DateText>
                        <S.ButtonGroup>
                            <S.EditButton onClick={openModal}>수정하기</S.EditButton>
                            <S.DelButton onClick={openModal}>삭제하기</S.DelButton>
                        </S.ButtonGroup> 
                    </S.SubTitle>
                </S.TitleText>
                <S.Thumbnail />
                <S.ContentText>내용</S.ContentText>
                <S.BottomBar>
                    <S.IconText>❤️ 좋아요 n개</S.IconText>
                    <S.IconText>💬 댓글 {comments.length}개</S.IconText>
                </S.BottomBar>
                <S.CommentContainer>
                    <TextInput
                        height={30}
                        placeholder="답변을 작성해주세요"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button title="→" onClick={handleCommentSubmit} />
                </S.CommentContainer>
                <CommentList comments={comments} />
            </S.Main>

            {isModalOpen && <DelModal onConfirm={closeModal} onCancel={closeModal} />}
        </S.Container>
    );
}

export { MyPostPage };
