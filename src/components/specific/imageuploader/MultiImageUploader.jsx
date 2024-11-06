import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #FFFFE5;
  border: 1px solid #E3B05F;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const MultiImageUploader = ({ onImagesUpload }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);

    if (onImagesUpload) {
      onImagesUpload([...images, ...newImages]);
    }
  };

  return (
    <Container>
      {images.map((image, index) => (
        <PreviewImage key={index} src={image} alt={`Uploaded Preview ${index + 1}`} />
      ))}
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
    </Container>
  );
};

export default MultiImageUploader;
