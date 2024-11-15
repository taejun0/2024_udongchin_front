import { instance } from "./instance";

// 신고 API 함수
export const reportPost = async (postId, reason, customReason = "") => {
    try {
        const reportData = {
            post_id: postId,
            reason,
            ...(customReason && { customReason }), // customReason이 있을 때만 추가
        };

        const response = await instance.post(`/api/post/community/${postId}/warn`, reportData);
        return response.data;
    } catch (error) {
        console.error("신고 API 호출 중 오류 발생:", error);
        throw error;
    }
};
