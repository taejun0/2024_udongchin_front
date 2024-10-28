import * as S from "./styled";
import React from "react";

export const KakaodetailModal = ({ location, onClose }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <button onClick={onClose}>닫기</button>
        <h2>{location.name}</h2>
        <img src={location.imageUrl} alt={location.name} style={{ width: "100%" }} />
        <p>종: {location.species}</p>
        <p>설명: {location.description}</p>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};