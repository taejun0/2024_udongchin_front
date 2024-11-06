import React, { useState } from 'react';
import * as S from "./styled";
import MultiImageUploader from '../imageuploader/MultiImageUploader';


export const StepOne = ({ onNext, updateData }) => {
  const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("image");

  const handleNext = () => {
    if (selectedOption !== "image") {
      setImages([]);
    }
    updateData("images", images);
    onNext();
  };

  const handleImageUpload = (newImages) => {
    setImages(newPhotos);
  };

  return (
    <S.Wrapper>
      <S.Section1>
        <S.MainText2>1. 목격사진</S.MainText2>
        <S.ProgressBarWrapper>
          <S.ProgressBar progress={25} />
        </S.ProgressBarWrapper>
        <S.Radios>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              value="image"
              checked={selectedOption === "image"}
              onChange={() => setSelectedOption("image")}
            />
            이미지 업로드 (최대 10장)
          </S.RadioLabel>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              value="none"
              checked={selectedOption === "none"}
              onChange={() => setSelectedOption("none")}
            />
            사진을 못 찍었어요 😢
          </S.RadioLabel>
        </S.Radios>
        {selectedOption === "image" && (
          <MultiImageUploader
            photos={images}
            onImageUpload={handleImageUpload}
            maxPhotos={10}
          />
        )}
      </S.Section1>
      <S.Section2>
        <S.NextButton onClick={handleNext}>다음</S.NextButton>
      </S.Section2>
    </S.Wrapper>
  );
};
