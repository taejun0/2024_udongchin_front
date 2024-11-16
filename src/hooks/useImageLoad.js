import { useState, useEffect } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL + "/api/images";

export const useImageLoad = (imagePath) => {
  const [imageBlobUrl, setImageBlobUrl] = useState(null);

  useEffect(() => {
    if (!imagePath) return;

    const fetchImage = async () => {
      try {
        // images/ 제거하여 filename 추출
        const filename = imagePath.replace(/^images\//, "");
        const apiUrl = `${BASE_URL}?filename=${filename}`;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setImageBlobUrl(blobUrl);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    fetchImage();

    // Cleanup function to revoke the Blob URL
    return () => {
      if (imageBlobUrl) {
        URL.revokeObjectURL(imageBlobUrl);
      }
    };
  }, [imagePath]);

  return imageBlobUrl;
};