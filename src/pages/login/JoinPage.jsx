import React, { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/common/buttons/PostButton";
import { onSubmitHandler } from "../../services/signUp";
import backward from "/images/Backward.svg";
import logo2 from "/images/logo_2.svg"
import uselogo from "/images/use_logo.svg"


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
            <S.Main
                style={{
                    background: step === 2
                        ? "linear-gradient(180deg, #2B6FCC 0%, #0E2543 45.5%, #000 100%), url('/images/earth.svg')"
                        : step === 3
                        ? "#2FD450"
                        : "#fff",
                    backgroundSize: step === 2 ? "cover" : "auto", // 이미지 크기 조절
                    backgroundPosition: "center", // 이미지 위치 설정
                    color: step === 2 || step === 3 ? "#000" : "#333",
                }}
            >

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
                        <S.FormGroup2>
                            <S.Label1>현재 지구에 서식 중인 동식물은</S.Label1>
                            <S.Label2>인간 외에도 무려 150만 종이나 있어요</S.Label2>
                            <S.Divider>···</S.Divider>
                        </S.FormGroup2>

                        <S.FormGroup2>
                            <S.Label3>그 중 상당수는 우리 곁에도 살고 있죠</S.Label3>
                            <S.Label4>
                                | 서울에 서식하는 동식물만 5,515종 |<br />
                                포유류 30종, 조류 235종, 양서류 16종, 파충류 22종, 무척수 동물종 388종,<br />
                                곤충류 2,278종, 식물종 2,156종, 균류 390종
                            </S.Label4>
                        </S.FormGroup2>

                        <S.FormGroup2>
                            <S.Label5>그런데 우리는,<br />우리와 함께 살고 있는 친구들을 잘 알고 있나요?</S.Label5>
                        </S.FormGroup2>
                            <S.Divider2>.</S.Divider2>
                            <S.AppLogo><img src={logo2} style={{ width: "40%"}}/></S.AppLogo>
                            <S.Label6>
                                이에 우동친은 인간과 동물의 공생을 위해
                            </S.Label6>
                            <S.AppDescription>
                                우리 동네에 서식할 수 있는 야생 동식물을 알려주고,<br />
                                동네 친구들을 알아가는 지식을 마련하고자 하는
                            </S.AppDescription>
                            <S.AppTagline>동네 중심 생태 지도 및 커뮤니티 서비스입니다.</S.AppTagline>
                    </>
                )}

                {step === 3 && (
                    <>
                        {/* Terms Agreement Page 2 */}
                        <S.FormGroup>
                        <S.AppLogo><img src={uselogo} style={{ width: "50%"}}/></S.AppLogo>
                        <S.FormGroup2>
                        <S.AppLogo><img src={uselogo} style={{ width: "50%"}}/></S.AppLogo>
                            <S.Label7>| 주의사항 |</S.Label7>
                            <S.Label8>우동친은 오로지 공익적인 목적으로 운영되며, 서비스 내에서 공유된 동물 정보를<br />기반으로 악의적인 행동을 일으키거나 서비스 의도에 부적합한 방향으로 이용할 경우<br />영구 정지될 수 있습니다.  이에 동의하십니까?</S.Label8>
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
                        </S.FormGroup2>
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
