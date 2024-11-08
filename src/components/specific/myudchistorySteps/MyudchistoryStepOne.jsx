import React from "react";
import * as S from "./styled";
import folder from "/images/folder.svg";

export const MyudchistoryStepOne = ({ onNext }) => {

  const handleNext = () => {
    onNext();
  }
  return (
    <div>
      <S.Title>내 우동친 기록</S.Title>
      <S.LINE />
      <S.SubText>직접 방문하여 우동친(기록/Q/A)을 남긴 동네들이 표기됩니다.</S.SubText>
      <S.Images>
        <S.ImageSet onClick={handleNext}>
          <S.CustomImage src={folder} />
          전체 보기
        </S.ImageSet>
      </S.Images>
    </div>
  )
}