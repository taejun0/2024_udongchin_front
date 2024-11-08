import React from "react";
import * as S from "./styled";
import X from "/images/Vector.svg";
import ThreeLine from "/images/ThreeLine.svg"; 
import { useNavigate } from "react-router-dom";

export const Submenu = ({onClose}) => {
  const navigation = useNavigate();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.LeftImage src={ThreeLine} />
        <S.RightImage onClick={onClose} src={X} />
      </S.HeaderWrapper>
      <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/login")}>
        로그인
      </S.Box>
      <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/join")}>
        회원가입
      </S.Box>
    </S.Wrapper>
  )
}