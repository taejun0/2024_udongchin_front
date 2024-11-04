import { useState } from "react";
import * as S from "./styled";
import Backward from "/images/Backward.svg";
import HamBar from "/images/HamBar.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Submenu } from "../submenu/Submenu";

export const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const isBackward = location.pathname === "/";
  const isRoot = location.pathname === "/";

  const ToggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      {isRoot && <S.Image src={HamBar} onClick={ToggleModal}/> }
      <S.Text>우동친</S.Text>
      {modalOpen && 
      <S.MainWrapper>
        <Submenu onClose={ToggleModal}/>
      </S.MainWrapper>
    }
    </S.Wrapper>
  )
}