import { useState } from "react";
import * as S from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Submenu } from "../submenu/Submenu";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  // 경로에 따라 이미지와 배경색 설정
  const getHeaderConfig = () => {
    switch (location.pathname) {
      case "/":
        return { imageSrc: "/images/HamBar.svg", backgroundColor: "{({theme}) => > theme.colors.headerColor" };
      case "/myudchistory":
        return { imageSrc: "/images/Backward.svg", backgroundColor: "{({theme}) => > theme.colors.headerColor" };
      default:
        return { imageSrc: "/images/Default.svg", backgroundColor: "#ffffff" };
    }
  };

  const { imageSrc, backgroundColor } = getHeaderConfig();

  const handleImageClick = () => {
    if (imageSrc === "/images/HamBar.svg") {
      setModalOpen((prev) => !prev);
    } else if (imageSrc === "/images/Backward.svg") {
      navigate(-1);
    }
  };

  return (
    <S.Wrapper style={{ backgroundColor }}>
      <S.Image src={imageSrc} onClick={handleImageClick} />
      {location.pathname === "/" ? (
        <S.Text style={{cursor: "pointer"}} onClick={() => navigate("/login")}>로그인</S.Text>
      ) : (
        <S.Text>우동친</S.Text>
      )}
      {modalOpen && (
        <S.MainWrapper $isOpen={modalOpen}>
          <Submenu onClose={() => setModalOpen(false)} />
        </S.MainWrapper>
      )}
    </S.Wrapper>
  );
}


export default Header;