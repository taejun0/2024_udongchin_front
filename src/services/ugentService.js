import { instance } from "./instance";

export const urgentService = async (postID) => {
  try {
    const response = await instance.post(`/api/post/qa/${postID}/urgent`, {
      urgent: true,
    });
  } catch (error) {
    throw error;
  }
};