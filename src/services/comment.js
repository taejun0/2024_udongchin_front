import { instance } from "./instance";

// 게시글 및 댓글 가져오기 API
export const fetchPostData = async (postId) => {
    try {
        const response = await instance.get(`/api/post/community/free/${postId}`);
        if (response.status === 200) {
            const post = response.data.data;

            // 로컬 스토리지에서 닉네임과 아이디 불러오기
            const userNickname = localStorage.getItem("nickname");
            const userId = localStorage.getItem("memberId");

            // 댓글 데이터 변환
            const transformedComments = post.comments.map(comment => ({
                id: comment.commentId,
                nickname: comment.author, // 댓글 작성자 닉네임
                content: comment.content,
                createdAt: comment.createdAt,
            }));
            
            return { post, comments: transformedComments, userNickname, userId }; // 닉네임과 아이디 반환
        } else {
            console.error("게시글 데이터 가져오기 실패:", response.data);
            return null;
        }
    } catch (error) {
        console.error("게시글 데이터를 불러오는 중 오류 발생:", error);
        throw error;
    }
};
