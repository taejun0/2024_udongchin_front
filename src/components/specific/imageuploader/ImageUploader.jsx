import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@components/specific/cropImage';
import Backward from "/images/Backward.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $isUploaded }) => ($isUploaded ? '100px' : '100%')};
  height: ${({ $isUploaded }) => ($isUploaded ? '100px' : '27px')};
  background-color: #FFFFE5;
  border: 1px solid #E3B05F;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFEB["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: fill;
`;

const CropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const CropWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const ControlBar = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.lightyellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CropButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  cursor: pointer;
`;

const ImageUploaderWithCrop = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
        setShowCropModal(true);
      };
    }
  };

  const handleCropConfirm = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      
      if (croppedImage instanceof File) {
        const previewUrl = URL.createObjectURL(croppedImage);
        setImagePreview(previewUrl);
  
        if (onImageUpload) {
          onImageUpload(croppedImage);
        }
  
        // Blob URL 해제는 필요에 따라 수행
        // URL.revokeObjectURL(previewUrl);
  
      } else {
        console.error("Cropped image is not a File object.");
      }
  
      setShowCropModal(false);
    } catch (error) {
      console.error("Failed to crop image:", error);
    }
  };

  return (
    <Container>
      <ImageUploadButton $isUploaded={!!imagePreview}>
        {imagePreview ? (
          <PreviewImage src={imagePreview} alt="Uploaded Preview" />
        ) : (
          <span>이미지 업로드</span>
        )}
        <HiddenInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ImageUploadButton>

      {showCropModal && (
        <CropContainer>
          <CropWrapper>
            <ControlBar>
              <CropButton onClick={() => setShowCropModal(false)}>
                <img src={Backward} />
              </CropButton>
              <span>이미지 조절</span>
              <CropButton onClick={handleCropConfirm} $isConfirm>
                확인
              </CropButton>
            </ControlBar>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          </CropWrapper>
        </CropContainer>
      )}
    </Container>
  );
};

export default ImageUploaderWithCrop;