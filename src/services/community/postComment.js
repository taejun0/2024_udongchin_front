import { instance } from "../instance";

// 댓글 작성 API 함수
export const postComment = async (newComment) => {
    try {
        const response = await instance.post("https://43.203.40.221.nip.io/api/post/{postId}/comments", newComment);
        return response.data; 
    } catch (error) {
        console.error("댓글 작성 중 오류 발생:", error);
        throw error; 
    }
};
