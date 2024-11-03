import React from "react";
import * as S from "./styled";

export const WarningModal = ({ onConfirm, onCancel }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent2>
        <S.TextType2>긴급 건으로 전환하시겠습니까?</S.TextType2>
        <S.SubText2>
          전환 시 지도에 24시간동안 긴급 건으로 표기되며,<br />
          모든 동네 사람들에게 공유됩니다.<br /><br />

          하루에 최대 3건까지 긴급 건으로 전환이 가능합니다.
        </S.SubText2>
        <S.Row>
          <S.Button color="#FF8B8D" onClick={onConfirm}>네</S.Button>
          <S.Button color="#989898" onClick={onCancel}>아니오</S.Button>
        </S.Row>
      </S.ModalContent2>
    </S.ModalOverlay>
  )
}