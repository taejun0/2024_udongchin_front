import { instance } from "./instance";

export const fetchPosts = async () => {
  try {
    const response = await instance.get("/api/mypage/post");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};