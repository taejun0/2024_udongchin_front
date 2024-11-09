import React, { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/common/buttons/PostButton";
import axios from 'axios';
import backward from "/images/Backward.svg";

const JoinPage = () => {
    const [nickname, setNickname] = useState('');
    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    // 정규식: 아이디는 영문, 숫자 조합 8자 이상
    const idRegex = /^[a-zA-Z0-9]{8,}$/;
    // 정규식: 비밀번호는 영문 대소문자, 숫자 포함 10자 이상
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;

    // 폼 유효성 검사
    const isIdValid = idRegex.test(memberId);
    const isPasswordValid = passwordRegex.test(password);
    const isPasswordMismatch = password && passwordConfirm && password !== passwordConfirm;
    const isNicknameValid = nickname.length <= 10; // 닉네임 10자 제한
    const isFormValid = nickname && isNicknameValid && isIdValid && isPasswordValid && !isPasswordMismatch;

    const onSubmitHandler = async () => {
        try {
            const response = await axios.post('http://localhost:5173/api/signUp', {
                nickname,
                memberId,
                password,
            });

            if (response.data.success) {
                alert("회원가입 성공!");
                navigate("/");
            } else {
                alert("회원가입 실패: " + response.data.message);
            }
        } catch (error) {
            console.error("회원가입 요청 오류:", error);
            alert("회원가입 요청 중 오류가 발생했습니다.");
        }
    };

    return (
        <S.SignupContainer>
            <S.Header>
                <S.BackButton onClick={() => navigate(-1)}>
                    <img src={backward} style={{ cursor: "pointer" }} />
                </S.BackButton>
                <S.Title>회원가입</S.Title>
            </S.Header>
            <S.Main>
                <S.FormGroup>
                    <label htmlFor="nickname">닉네임 입력</label>
                    <S.InputField
                        type="text"
                        id="nickname"
                        placeholder="닉네임을 입력해주세요"
                        value={nickname}
                        maxLength={10} // 닉네임 10자 제한
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    {!isNicknameValid && (
                        <S.ErrorMessage>닉네임은 최대 10자까지 입력 가능합니다.</S.ErrorMessage>
                    )}
                </S.FormGroup>

                <S.FormGroup>
                    <S.InputWithCheck>
                        <label htmlFor="username">아이디 입력</label>
                        <S.CheckButton>중복확인</S.CheckButton>
                    </S.InputWithCheck>
                    <S.InputField
                        type="text"
                        id="username"
                        placeholder="아이디를 입력해주세요."
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                    />
                    {!isIdValid && memberId && (
                        <S.ErrorMessage>아이디는 영문과 숫자를 조합한 8자 이상이어야 합니다.</S.ErrorMessage>
                    )}
                </S.FormGroup>

                <S.FormGroup>
                    <label htmlFor="password">비밀번호 입력</label>
                    <S.InputField
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPasswordValid && password && (
                        <S.ErrorMessage>비밀번호는 영문 대소문자, 숫자를 포함하여 10자 이상이어야 합니다.</S.ErrorMessage>
                    )}
                </S.FormGroup>

                <S.FormGroup>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <S.InputField
                        type="password"
                        id="passwordConfirm"
                        placeholder="비밀번호를 입력해주세요."
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    {isPasswordMismatch && (
                        <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
                    )}
                </S.FormGroup>

                <Button
                    height="37px"
                    title="다음"
                    backgroundColor={isFormValid ? "#5b3200" : "#ccc"}
                    color="#fff"
                    onClick={onSubmitHandler}
                    disabled={!isFormValid}
                />
            </S.Main>
        </S.SignupContainer>
    );
};

export { JoinPage };
