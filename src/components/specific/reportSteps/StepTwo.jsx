import React, { useState } from "react";
import * as S from "./styled";
import { MapSelector } from "../maps/MapSelector";

export const StepTwo = ({ onNext, updateData }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location_description, setLocationDescription] = useState("");
  const [showMapSelector, setShowMapSelector] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  const handleNext = () => {
    updateData({
      location: latitude && longitude ? [latitude, longitude] : [],
      location_description: location_description,
    });
    onNext();
  };

  const handleLocationConfirm = (coords) => {
    setLatitude(coords.lat);
    setLongitude(coords.lng);
  };

  return (
    <S.Wrapper>
      <S.Section1>
        <S.MainText2>2. 목격한 장소를 입력해 주세요</S.MainText2>
        <S.ProgressBarWrapper>
          <S.ProgressBar progress={50} />
        </S.ProgressBarWrapper>
        <S.CheckboxWrapper>
          <S.CheckboxLabel>
            <S.CheckboxInput
              type="checkbox"
              checked={showMapSelector}
              onChange={() => setShowMapSelector((prev) => !prev)}
            />
            목격 위치 설정
          </S.CheckboxLabel>

          <S.CheckboxLabel>
            <S.CheckboxInput
              type="checkbox"
              checked={showDescription}
              onChange={() => setShowDescription((prev) => !prev)}
            />
            목격 위치 설명 추가
          </S.CheckboxLabel>
        </S.CheckboxWrapper>
        {showMapSelector && <MapSelector onConfirm={handleLocationConfirm} />}
        {showDescription && (
          <S.Textarea
            value={location_description}
            onChange={(e) => setLocationDescription(e.target.value)}
            placeholder="목격 장소를 묘사해주세요."
          />
        )}
      </S.Section1>
      <S.NextButton onClick={handleNext}>다음</S.NextButton>
    </S.Wrapper>
  );
};
