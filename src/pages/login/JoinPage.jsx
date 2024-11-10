// JoinPage.jsx
import React, { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/common/buttons/PostButton";
import axios from 'axios';
import backward from "/images/Backward.svg"

const JoinPage = () => {
    const [nickname, setNickname] = useState('');
    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async () => {
        try {
            // 회원가입 API 요청
            const response = await axios.post('http://localhost:5173/api/signUp', {
                nickname,
                memberId,
                password,
            });

            // 성공적인 응답 처리
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
                    <img src={backward} style={{ cursor: "pointer"}}/>
                </S.BackButton>
                <S.Title>회원가입</S.Title>
            </S.Header>
            <S.Main>
                <S.FormGroup>
                    <label htmlFor="nickname">닉네임 입력</label>
                    <S.InputField
                        type="text"
                        id="nickname"
                        placeholder="ex) 춤추는 개구리"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
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
                </S.FormGroup>

                <S.FormGroup>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <S.InputField type="password" id="passwordConfirm" placeholder="비밀번호를 입력해주세요." />
                </S.FormGroup>

                <Button
                    height="37px"
                    title="다음"
                    backgroundColor="#5b3200"
                    color="#fff"
                    onClick={onSubmitHandler}
                />
            </S.Main>
        </S.SignupContainer>
    );
};

export { JoinPage };
