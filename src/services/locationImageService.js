import { instance } from "./instance";

export const fetchImageUrls = async (locationList) => {
  const imageMap = {};

  for (const location of locationList || []) {
    if (location.imageUrl) {
      if (location.mode === "생태 지도") {
        imageMap[location.imageUrl] = location.imageUrl;
      } else {
        const filename = location.imageUrl.replace(/^images\//, ""); // "images/" 제거
        const apiUrl = `/api/images?filename=${filename}`;
  
        try {
          const response = await instance.get(apiUrl, { responseType: 'blob' });
  
          if (response.status === 200 && response.data instanceof Blob) {
            const blobUrl = URL.createObjectURL(response.data);
            imageMap[location.imageUrl] = blobUrl;
          } else {
            imageMap[location.imageUrl] = "/images/default-image.png"; // 기본 이미지 설정
          }
        } catch (error) {
          imageMap[location.imageUrl] = "/images/default-image.png";
        }
      }
    }
  }

  // 최종 이미지 매핑 로그
  // console.log("Final image map:", imageMap);
  return imageMap;
};