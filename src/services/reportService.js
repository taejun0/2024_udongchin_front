import { instance } from "./instance";

export const reportService = async (reportData) => {
  try {
    const response = await instance.post("/api/post/report", reportData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to submit report:", error);
    throw error;
  }
};
