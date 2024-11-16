import { instance } from "./instance";

export const QnaMarkerData = async (markerData) => {
  const formData = new FormData();
  
  // 필드 설정
  formData.append("title", markerData.title);
  formData.append("content", markerData.content);
  formData.append("image", markerData.photo); // 이미지 파일
  formData.append("mode", markerData.type);
  
  const formattedLocation = [
    String(37.5640), // 위도를 문자열로 변환
    String(126.9990), // 경도를 문자열로 변환
    markerData.locations[2],         // 주소 (이미 문자열)
  ];
  
  formData.append("location", formattedLocation);

  // console.log("Form Data - Title:", markerData.title);
  // console.log("Form Data - Content:", markerData.content);
  // console.log("Form Data - Mode:", markerData.type);
  // console.log("Form Data - Location:", formattedLocation);

  if (markerData.photo) {
    // console.log("Form Data - Photo:");
    // console.log("Name:", markerData.photo.name);
    // console.log("Type:", markerData.photo.type);
    // console.log("Size:", markerData.photo.size);
  } else {
    console.error("No photo provided.");
  }

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