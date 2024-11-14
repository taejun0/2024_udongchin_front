import React from "react";
import * as S from "./styled";

import { useNavigate } from "react-router-dom";

export const WarningLoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <S.ModalOverlay2 style={{zIndex: 1000}}>
      <S.ModalContent2>
        <S.TextType2>로그인 시 사용 가능한 기능입니다.</S.TextType2>
        <S.SubText2>
          로그인 시 더욱 다양한 기능을 이용할 수 있어요!
        </S.SubText2>
        <S.Row>
          <S.Button color="#5B3200" onClick={() => navigate("/login")}>로그인하기</S.Button>
          <S.Button color="#989898" onClick={onClose}>취소</S.Button>
        </S.Row>
      </S.ModalContent2>
    </S.ModalOverlay2>
  )
}