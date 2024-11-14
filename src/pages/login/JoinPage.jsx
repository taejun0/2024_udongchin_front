import React, { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/common/buttons/PostButton";
import { onSubmitHandler } from "../../services/signUp";
import backward from "/images/Backward.svg";
const JoinPage = () => {
    const [step, setStep] = useState(1); // Track current step
    const [nickname, setNickname] = useState('');
    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isAgreeChecked, setIsAgreeChecked] = useState(false); // Track agreement checkbox
    const [idCheckMessage, setIdCheckMessage] = useState(null); // 중복 확인 메시지
    const navigate = useNavigate();

    const idRegex = /^[a-zA-Z0-9]{8,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;

    const isIdValid = idRegex.test(memberId);
    const isPasswordValid = passwordRegex.test(password);
    const isPasswordMismatch = password && passwordConfirm && password !== passwordConfirm;
    const isNicknameValid = nickname.length <= 10;
    const isFormValid = nickname && isNicknameValid && isIdValid && isPasswordValid && passwordConfirm && !isPasswordMismatch;

    const handleSignUpClick = () => {
        if (step === 1) {
            setStep(2); // Go to terms agreement page
        } else if (step === 2) {
            setStep(3); // Go to next terms page or final page
        } else if (step === 3 && isAgreeChecked) {
            onSubmitHandler(nickname, memberId, password, navigate, alert); // Final submission
        }
    };

    return (
        <S.SignupContainer>
            <S.Header>
                <S.BackButton onClick={() => (step === 1 ? navigate(-1) : setStep(step - 1))}>
                    <img src={backward} style={{ cursor: "pointer" }} />
                </S.BackButton>
                <S.Title>회원가입</S.Title>
            </S.Header>
            <S.Main>
                {step === 1 && (
                    <>
                        {/* Initial Form Page */}
                        <S.FormGroup>
                            <label htmlFor="nickname">닉네임 입력</label>
                            <S.InputField
                                type="text"
                                id="nickname"
                                placeholder="닉네임을 입력해주세요"
                                value={nickname}
                                maxLength={10}
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
                    </>
                )}

                {step === 2 && (
                    <>
                        {/* Terms Agreement Page 1 */}
                        <S.FormGroup>
                            <label>통합회원가입 약관 동의</label>
                        </S.FormGroup>
                    </>
                )}

                {step === 3 && (
                    <>
                        {/* Terms Agreement Page 2 */}
                        <S.FormGroup>
                            <label>동의하십니까?</label>
                            <S.CheckBoxContainer>
                                <input
                                    type="checkbox"
                                    id="agreeTerms2"
                                    checked={isAgreeChecked}
                                    onChange={(e) => setIsAgreeChecked(e.target.checked)}
                                />
                                <label htmlFor="agreeTerms2">동의</label>
                                <input
                                    type="checkbox"
                                    id="disagreeTerms"
                                    checked={!isAgreeChecked}
                                    onChange={(e) => setIsAgreeChecked(!e.target.checked)}
                                />
                                <label htmlFor="disagreeTerms">비동의</label>
                            </S.CheckBoxContainer>
                        </S.FormGroup>
                    </>
                )}

                <Button
                    height="37px"
                    title={step === 3 ? "완료" : "다음"}
                    backgroundColor={(step === 3 ? isAgreeChecked : isFormValid) ? "#5b3200" : "#ccc"}
                    color="#fff"
                    onClick={handleSignUpClick}
                    disabled={step === 1 ? !isFormValid : step === 3 && !isAgreeChecked}
                />
            </S.Main>
        </S.SignupContainer>
    );
};

export { JoinPage };
