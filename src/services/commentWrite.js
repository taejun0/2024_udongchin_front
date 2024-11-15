import { instance } from "./instance";

export const addComment = async (postId, content) => {
    const newComment = {
        postId,
        content,
        createdAt: new Date().toISOString(),
    };

    try {
        const response = await instance.post(`/api/post/${postId}/comments`, newComment);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("댓글 작성 실패:", response.data);
            return null;
        }
    } catch (error) {
        console.error("댓글 작성 중 오류 발생:", error);
        throw error;
    }
};
