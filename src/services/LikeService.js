import { instance } from "./instance";

export const fetchLikeStatus = async (postId) => {
  try {
    const response = await instance.update(`/api/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch like status:", error);
    throw error;
  }
};

export const addLike = async (postId) => {
  try {
    await instance.post(`/api/post/${postId}`);
  } catch (error) {
    console.error("Failed to add like:", error);
    throw error;
  }
};

export const removeLike = async (postId) => {
  try {
    await instance.delete(`/api/post/${postId}`);
  } catch (error) {
    console.error("Failed to remove like:", error);
    throw error;
  }
};
