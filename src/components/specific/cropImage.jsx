export const getCroppedImg = (imageSrc, pixelCrop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to create Blob."));
            return;
          }
          // Blob을 File로 변환
          const file = new File([blob], "croppedImage.jpg", { type: "image/jpeg" });
          console.log("Generated File:", { name: file.name, type: file.type, size: file.size });
          resolve(file);
        },
        "image/jpeg"
      );
    };
    image.onerror = (error) => reject(error);
  });
};
