import { instance } from "./instance";

export const QnaMarkerData = async (markerData) => {
  const formData = new FormData();
  formData.append("title", markerData.title);
  formData.append("content", markerData.content);
  formData.append("image", markerData.photo);
  formData.append("mode", markerData.type);
  formData.append("locations", JSON.stringify(markerData.locations));

  try {
    const response = await instance.post("/api/post/qa", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to post marker data:", error);
    throw error;
  }
};