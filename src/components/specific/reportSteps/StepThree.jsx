import React, { useState } from 'react';
import * as S from "./styled";

export const StepThree = ({ onNext, updateData }) => {
  const [animal_type, setAnimal_type] = useState("");
  const [selectedOption, setSelectedOption] = useState("think");

  const handleNext = () => {
    updateData({
      animal: selectedOption === "think" ? animal_type : "",
      no_animal: selectedOption === "none",
    });
    onNext();
  };

  return (
    <S.Wrapper>
      <S.Section1>
        <S.MainText2>3. 어떤 동물로 추정되나요?</S.MainText2>
        <S.ProgressBarWrapper>
          <S.ProgressBar progress={75} />
        </S.ProgressBarWrapper>
        <S.Radios>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              value="think"
              checked={selectedOption === "think"}
              onChange={() => setSelectedOption("think")}
            />
            추정되는 동물이 있어요
          </S.RadioLabel>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              value="none"
              checked={selectedOption === "none"}
              onChange={() => setSelectedOption("none")}
            />
            어떤 동물인지 모르겠어요 😢
          </S.RadioLabel>
        </S.Radios>
        {selectedOption === "think" && (
          <S.Textarea
            value={animal_type}
            onChange={(e) => setAnimal_type(e.target.value)}
            placeholder="추정되는 동물을 적어주세요. (공백 포함 20글자 이내)"
          />
        )}
      </S.Section1>
      <S.NextButton onClick={handleNext}>다음</S.NextButton>
    </S.Wrapper>
  );
};