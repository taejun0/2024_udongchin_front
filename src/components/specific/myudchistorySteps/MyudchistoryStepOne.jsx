import React from "react";
import * as S from "./styled";
import folder from "/images/folder.svg";
import { usemyPost } from "@hooks/usemyPost";

export const MyudchistoryStepOne = ({ onNext }) => {
  const { posts, isLoading, error } = usemyPost();

  const uniqueLocations = Array.from(new Set(posts.map((post) => post.location[2])));

  const handleNext = () => {
    onNext();
  }
  return (
    <div>
      <S.Title>내 우동친 기록</S.Title>
      <S.LINE />
      <S.SubText>직접 방문하여 우동친(기록/Q/A)을 남긴 동네들이 표기됩니다.</S.SubText>
      <S.Images>
        {uniqueLocations.map((location, index) => (
          <S.ImageSet key={index} onClick={() => onNext(location)}>
            <S.CustomImage src={folder} />
            {location}
          </S.ImageSet>
        ))}
      </S.Images>
    </div>
  )
}