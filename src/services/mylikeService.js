import { instance } from "./instance";

export const fetchLikes = async () => {
  try {
    const response = await instance.get("/api/mypage/like");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};