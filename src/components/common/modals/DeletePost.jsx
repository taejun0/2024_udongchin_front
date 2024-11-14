import React from "react";
import * as S from "./styled";

export const DeletePost = ({ onConfirm, onCancel }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent2>
        <S.TextType2>해당 게시물을 삭제하시겠습니까?</S.TextType2>
        <S.SubText2>
          삭제한 게시물은 되돌릴 수 없습니다.
        </S.SubText2>
        <S.Row>
          <S.Button color="#FF8B8D" onClick={onConfirm}>네</S.Button>
          <S.Button color="#989898" onClick={onCancel}>아니오</S.Button>
        </S.Row>
      </S.ModalContent2>
    </S.ModalOverlay>
  )
}

export default DeletePost;