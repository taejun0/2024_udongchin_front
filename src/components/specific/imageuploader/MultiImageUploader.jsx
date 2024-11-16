import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import X from "/images/Vector2.svg";

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: ${({theme}) => theme.colors.yellow_btn};
  color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const XIMG = styled.img`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const MultiImageUploader = ({ onImageUpload }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file)
    }));

    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...newImages];

      if (onImageUpload) {
        const fileArray = updatedImages.map(img => img.file);
        onImageUpload(fileArray);
      }

      return updatedImages;
    });
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      URL.revokeObjectURL(prevImages[index].previewUrl);
      if (onImageUpload) {
        onImageUpload(updatedImages.map(img => img.file));
      }

      return updatedImages;
    });
  };

  return (
    <Container>
      {images.length < 10 && (
        <ImageUploadButton>
          <span>이미지 추가</span>
          <HiddenInput
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </ImageUploadButton>
      )}
      {images.map((image, index) => (
        <PreviewContainer key={index}>
          <PreviewImage src={image.previewUrl} alt={`Uploaded Preview ${index + 1}`} />
          <XIMG src={X} onClick={() => handleDeleteImage(index)} />
        </PreviewContainer>
      ))}
    </Container>
  );
};

export default MultiImageUploader;