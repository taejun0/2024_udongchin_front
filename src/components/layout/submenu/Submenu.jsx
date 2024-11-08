import React, {useState} from "react";
import * as S from "./styled";
import X from "/images/Vector.svg";
import ThreeLine from "/images/ThreeLine.svg"; 
import { useNavigate } from "react-router-dom";

export const Submenu = ({onClose}) => {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 함수 예제
  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 상태를 true로 변경
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 시 false로 변경
  };


  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.LeftImage src={ThreeLine} />
        <S.RightImage onClick={onClose} src={X} />
      </S.HeaderWrapper>
      {/* 로그인 여부에 따라 다른 화면 표시 */}
      {isLoggedIn ? (
        // 로그인 후 화면
        <>
          <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/login")}>
        로그인
        </S.Box>
        <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/join")}>
          회원가입
        </S.Box>
        </>
      ) : (
        // 로그인 전 화면
          <>
          <S.ProfileSection>
            <S.ImgSection>
              <S.ProfileImage src="/path/to/profile-image.jpg" alt="프로필 이미지" />
            </S.ImgSection>
            <S.InfoSection>
              <S.Myprofile>내 프로필</S.Myprofile>
              <S.UserName>춤추는 토끼</S.UserName>
              <S.UserId>아이디 odc123</S.UserId>
            </S.InfoSection>
          </S.ProfileSection>
          <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/")}>
          내 우동친 기록
          </S.Box>
          <S.Box style={{cursor: "pointer"}} onClick={() => navigation("/")}>
            로그아웃
          </S.Box>
        </>
      )}
    </S.Wrapper>
  )
}