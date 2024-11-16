import React, { useState, useEffect } from "react";
import * as S from "./styled";

export const StepFour = ({ onNext, updateData }) => {
  const [animal_description, setAnimal_description] = useState("");

  const handleNext = () => {
    updateData({
      animal_description,
    });
    onNext();
  };

  useEffect(() => {
    updateData({ animal_description });
  }, [animal_description]);

  return (
    <S.Wrapper>
      <S.Section1>
        <S.MainText2>4. 동물의 생김새를 글로 묘사해 주세요</S.MainText2>
        <S.ProgressBarWrapper>
          <S.ProgressBar progress={100} />
        </S.ProgressBarWrapper>
        <S.Textarea280
          value={animal_description}
          onChange={(e) => setAnimal_description(e.target.value)}
          placeholder="동물의 생김새를 최대한 자세히 묘사해 주세요. (공백 포함 100글자 이내)"
        />
      </S.Section1>
      <S.NextButton onClick={handleNext}>제출하기</S.NextButton>
    </S.Wrapper>
  );
};
