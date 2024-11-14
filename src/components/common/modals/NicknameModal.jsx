import React from "react";
import * as S from "./styled";

export const NicknameModal = ({ onConfirm, onCancel }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent3>
        <S.TextType3>닉네임을 변경하시겠습니까?</S.TextType3>
        <S.SubText2>
          닉네임을 입력해주세요(10자 이내)
        </S.SubText2>
        <S.Row>
          <S.Button color="#5B3200" onClick={onConfirm}>변경하기</S.Button>
          <S.Button color="#989898" onClick={onCancel}>취소하기</S.Button>
        </S.Row>
      </S.ModalContent3>
    </S.ModalOverlay>
  )
}