import { instance } from "./instance";

// 게시글 및 댓글 가져오기 API
export const fetchPostData = async (postId) => {
    try {
        const response = await instance.get(`/api/post/community/ad/${postId}`);
        if (response.status === 200) {
            const post = response.data.data; // 게시글 데이터
            const comments = post.comments; // 댓글 데이터
            return { post, comments }; // 게시글과 댓글 반환
        } else {
            console.error("게시글 데이터 가져오기 실패:", response.data);
            return null;
        }
    } catch (error) {
        console.error("게시글 데이터를 불러오는 중 오류 발생:", error);
        throw error;
    }
};
