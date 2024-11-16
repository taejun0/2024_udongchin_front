import React, { useState, useEffect } from "react";
import * as S from "./styled";
import X from "/images/Vector.svg";
import ThreeLine from "/images/ThreeLine.svg";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../services/instance"; // Axios 인스턴스 가져오기

export const Submenu = ({ onClose }) => {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [memberId, setMemberId] = useState(""); // 아이디 상태

  const profileImages = [
    "/profile/rabit_profile.png",
    "/profile/raccoon_profile.png",
    "/profile/squirrel_profile.png",
  ];

  useEffect(() => {
    // 프로필 이미지를 무작위로 선택
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    setProfileImage(profileImages[randomIndex]);

    // 로컬 스토리지에서 토큰 확인 및 데이터 불러오기
    const token = localStorage.getItem("token");
    const storedNickname = localStorage.getItem("nickname");
    const storedMemberId = localStorage.getItem("memberId");

    // 토큰 확인
    setIsLoggedIn(!!token); // 토큰이 존재하면 true

    // 로컬 스토리지에서 닉네임과 아이디 읽기
    if (storedNickname && storedMemberId) {
      setNickname(storedNickname);
      setMemberId(storedMemberId);
    } else if (token) {
      // API 호출로 닉네임과 아이디 가져오기
      const fetchUserData = async () => {
        try {
          const response = await instance.get("/api/mypage", {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
            },
          });
          if (response.status === 200) {
            const fetchedNickname = response.data.data.nickname;
            const fetchedMemberId = response.data.data.member_id;

            // 상태 업데이트
            setNickname(fetchedNickname);
            setMemberId(fetchedMemberId);

            // 로컬 스토리지에 저장
            localStorage.setItem("nickname", fetchedNickname);
            localStorage.setItem("memberId", fetchedMemberId);
          } else {
            console.error("유저 데이터 조회 실패:", response.data.message);
          }
        } catch (error) {
          console.error("유저 데이터를 불러오는 중 오류 발생:", error);
        }
      };
      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그인 상태 변경
    localStorage.removeItem("token"); // 토큰 삭제
    localStorage.removeItem("nickname"); // 닉네임 삭제
    localStorage.removeItem("memberId"); // 아이디 삭제
    navigation("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.LeftImage src={ThreeLine} />
        <S.RightImage onClick={onClose} src={X} />
      </S.HeaderWrapper>
      {isLoggedIn ? (
        <>
          <S.ProfileSection>
            <S.ImgSection>
              <S.ProfileImage src={profileImage} alt="프로필 이미지" />
            </S.ImgSection>
            <S.InfoSection>
              <S.Myprofile>내 프로필</S.Myprofile>
              <S.UserName>{nickname || "닉네임 없음"}</S.UserName> {/* 닉네임 표시 */}
              <S.UserId>아이디 {memberId || "아이디 없음"}</S.UserId> {/* 아이디 표시 */}
            </S.InfoSection>
          </S.ProfileSection>
          <S.Box style={{ cursor: "pointer" }} onClick={() => navigation("/")}>
            내 활동 기록
          </S.Box>
          <S.Box style={{ cursor: "pointer" }} onClick={() => navigation("/join")}>
            about 우동친
          </S.Box>
          <S.Box style={{ cursor: "pointer" }} onClick={handleLogout}>
            로그아웃
          </S.Box>
        </>
      ) : (
        <>
          <S.Box style={{ cursor: "pointer" }} onClick={() => navigation("/login")}>
            로그인
          </S.Box>
          <S.Box style={{ cursor: "pointer" }} onClick={() => navigation("/join")}>
            회원가입
          </S.Box>
          <S.Box style={{ cursor: "pointer" }} onClick={() => navigation("/join")}>
            about 우동친
          </S.Box>
        </>
      )}
    </S.Wrapper>
  );
};

export default Submenu;
