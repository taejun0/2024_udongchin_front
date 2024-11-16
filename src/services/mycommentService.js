import { instance } from "./instance";

export const fetchComments = async () => {
  try {
    const response = await instance.get("/api/mypage/comment");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};