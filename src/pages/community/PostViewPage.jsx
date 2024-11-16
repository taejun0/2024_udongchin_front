import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import CommentList from "../../components/common/list/CommentList";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/MoveButton";
import ReportModal from "../../components/common/modals/ReportModal";
import DeletePost from "../../components/common/modals/DeletePost";
import backward from "/images/Backward.svg";
import now from "/images/write_location.svg";
import { addComment } from "../../services/commentWrite";
import { fetchPostData } from "../../services/comment";
import { deletePost } from "../../services/deletePost";
import { reportPost } from "../../services/reportPost";
import heart from "/images/Heart.svg";
import { fetchImageUrl } from "../../services/freeImages.js"; // 이미지 처리 함수 추가

function PostViewPage(props) {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { id } = useParams();

    const currentUserId = localStorage.getItem("memberId");


    useEffect(() => {
        const loadPostData = async () => {
            try {
                console.log("Fetching post data for id:", id);
                const { post, comments } = await fetchPostData(id);
    
                if (post && comments) {
                    // Blob URL로 이미지 처리
                    const updatedPost = await fetchImageUrl(post); // 단일 post 변환
                    setPost(updatedPost);
                    setComments(comments);
    
                    console.log("Updated post with image URL:", updatedPost);
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

    // 신고 모달 제어
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // 삭제 모달 제어
    const openDeleteModal = () => setIsDeleteModalOpen(true);
    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    // 게시글 삭제 핸들러
    const handleDeletePost = async () => {
        try {
            await deletePost(id);
            alert("게시글이 삭제되었습니다.");
            navigate("/");
        } catch (error) {
            console.error("게시글 삭제 중 오류 발생:", error);
            alert("게시글 삭제에 실패했습니다.");
        }
    };

    // 게시글 신고 핸들러
    const handleReportPost = async (reason, customReason) => {
        try {
            await reportPost(id, reason, customReason);
            alert("게시글이 신고되었습니다.");
            setIsModalOpen(false);
        } catch (error) {
            console.error("게시글 신고 중 오류 발생:", error);
            alert("게시글 신고에 실패했습니다.");
        }
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
                                {post.contenter === currentUserId ? (
                                    <>
                                        <S.EditButton onClick={() => navigate("/edit")}>수정하기</S.EditButton>
                                        <S.DelButton onClick={openDeleteModal}>삭제하기</S.DelButton>
                                    </>
                                ) : (
                                    <>
                                        <S.CategoryButton>{post.type}</S.CategoryButton>
                                        <S.MapButton>
                                            <img
                                                src={now}
                                                style={{ cursor: "pointer", marginRight: "3px" }}
                                            />
                                            지도에서 위치보기
                                        </S.MapButton>
                                        <S.ReportButton onClick={openModal}>신고하기</S.ReportButton>
                                    </>
                                )}
                            </S.ButtonGroup>
                        </S.SubTitle>
                    </S.TitleText>

                    <S.ContentText>{/* Blob URL이 적용된 이미지를 렌더링 */}
                        <S.Thumbnail>{post.imageUrl ? (
                            <img src={post.imageUrl} alt="thumbnail" />
                        ) : (
                            <span>이미지가 없습니다</span>
                        )}</S.Thumbnail>
                        {post.content}
                    </S.ContentText>
                    <S.BottomBar>
                        <S.IconText><img src={heart} style={{ width: "16px" }} /> 좋아요 {post.likesCount}개</S.IconText>
                        <S.IconText>댓글 {comments.length}개</S.IconText>
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

            {/* 신고 모달 */}
            {isModalOpen && (
                <ReportModal
                    onConfirm={(reason, customReason) => handleReportPost(reason, customReason)}
                    onCancel={closeModal}
                />
            )}

            {/* 삭제 모달 */}
            {isDeleteModalOpen && (
                <DeletePost
                    onConfirm={handleDeletePost}
                    onCancel={closeDeleteModal}
                />
            )}
        </S.Container>
    );
}

export { PostViewPage };
