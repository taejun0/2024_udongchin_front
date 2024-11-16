import { instance } from "./instance";

export const reportService = async (formData) => {
  try {
    const response = await instance.post("/api/post/report", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to submit report:", error);
    throw error;
  }
};