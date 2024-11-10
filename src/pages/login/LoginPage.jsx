// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from "./styled";
import { onSubmitHandler } from "../../services/login";
import backward from "/images/Backward.svg"

function LoginPage() {
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트

  const onIdHandler = (event) => {
    setMemberId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // preventDefault를 이 함수에서 호출
    onSubmitHandler(memberId, password, navigate, setErrorMessage); // setErrorMessage 추가 전달
  };

  const handleSignupClick = () => {
    navigate("/join"); 
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
                    <img src={backward} style={{ cursor: "pointer"}}/>
        </S.BackButton>
        <S.Title>로그인</S.Title>
      </S.Header>
      <S.Main>
        <S.LoginTitle>로고</S.LoginTitle>

        <S.Label>
          아이디 입력
          <S.Input type="text" value={memberId} onChange={onIdHandler} placeholder="아이디를 입력해주세요." />
        </S.Label>

        <S.Label>
          비밀번호 입력
          <S.Input type="password" value={password} onChange={onPasswordHandler} placeholder="비밀번호를 입력해주세요." />
        </S.Label>

        <S.LoginButton onClick={handleSubmit}>로그인</S.LoginButton>
        <S.SignupButton onClick={handleSignupClick}>회원가입</S.SignupButton>

        {/* 오류 메시지가 있을 경우 표시 */}
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.Main>
    </S.Container>
  );
}

export { LoginPage };
