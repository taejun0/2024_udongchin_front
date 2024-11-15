import { instance } from "./instance";

export const deletePost = async (postId) => {
    try {
        const response = await instance.delete(`/api/post/community/free/${postId}`);
        return response.data; // 서버에서 반환된 데이터를 반환
    } catch (error) {
        console.error("게시글 삭제 중 오류 발생:", error);
        throw error;
    }
};
