import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import CommentList from "../../components/common/list/CommentList";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/MoveButton";
import ReportModal from "../../components/common/modals/ReportModal";
import backward from "/images/Backward.svg";
import now from "/images/write_location.svg";
import { addComment } from "../../services/commentWrite";
import { fetchPostData  } from "../../services/comment";

function PostViewPage(props) {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();

    // 게시글 및 댓글 데이터 가져오기
    useEffect(() => {
        const loadPostData = async () => {
            try {
                const { post, comments } = await fetchPostData(id);
                if (post && comments) {
                    setPost(post);
                    setComments(comments);
                }
            } catch (error) {
                console.error("게시글 데이터를 가져오는 중 오류 발생:", error);
            }
        };
        loadPostData();
    }, [id]);

    // 댓글 작성 함수
    const handleCommentSubmit = async () => {
        if (comment.trim() !== "") {
            try {
                const addedComment = await addComment(post.id, comment);
                if (addedComment) {
                    setComments([...comments, addedComment]);
                    setComment(""); // 입력란 초기화
                }
            } catch (error) {
                console.error("댓글 작성 중 오류 발생:", error);
            }
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
            {post && (
                <S.Main>
                    <S.TitleText>
                        <S.TextTitle>{post.title}</S.TextTitle>
                        <S.SubTitle>
                            <S.DateText>{new Date(post.createdAt).toLocaleDateString()}</S.DateText>
                            <S.ButtonGroup>
                                <S.CategoryButton>{post.type}</S.CategoryButton>
                                <S.MapButton><img src={now} style={{ cursor: "pointer", marginRight: "3px" }} />지도에서 위치보기</S.MapButton>
                                <S.ReportButton onClick={openModal}>신고하기</S.ReportButton>
                            </S.ButtonGroup> 
                        </S.SubTitle>
                    </S.TitleText>
                    <S.Thumbnail src={post.imageUrl} alt="게시글 이미지" />
                    <S.ContentText>{post.content}</S.ContentText>
                    <S.BottomBar>
                        <S.IconText>❤️ 좋아요 {post.likesCount}개</S.IconText>
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
            )}

            {isModalOpen && <ReportModal onConfirm={closeModal} onCancel={closeModal} />}
        </S.Container>
    );
}

export { PostViewPage };
