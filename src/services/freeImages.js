import { instance } from "./instance";

// 단일 post 객체에 대한 이미지 URL 변환
export const fetchImageUrl = async (post) => {
    if (!post?.imageUrl) {
        return post; // 이미지가 없는 경우, 원본 반환
    }

    const filename = post.imageUrl.replace(/^images\//, ""); // "images/" 제거
    const apiUrl = `/api/images?filename=${filename}`;

    try {
        console.log(`Fetching image for filename: ${filename}`);
        const response = await instance.get(apiUrl, { responseType: "blob" });

        if (response.status === 200 && response.data instanceof Blob) {
            const blobUrl = URL.createObjectURL(response.data);
            return { ...post, imageUrl: blobUrl }; // Blob URL로 대체
        } else {
            console.warn(`Failed to fetch image for ${post.imageUrl}, using default.`);
            return { ...post, imageUrl: "/images/default-image.png" }; // 기본 이미지
        }
    } catch (error) {
        console.error(`Error fetching image for ${post.imageUrl}:`, error);
        return { ...post, imageUrl: "/images/default-image.png" }; // 기본 이미지
    }
};
