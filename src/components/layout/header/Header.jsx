import * as S from "./styled";
import Backward from "/images/Backward.svg";
import HamBar from "/images/HamBar.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const isBackward = location.pathname === "/";
  const isRoot = location.pathname === "/";

  return (
    <S.Wrapper>
      {isRoot && <S.Image src={HamBar} onClick={() => navigation()}/> }
      <S.Text>우동친</S.Text>
    </S.Wrapper>
  )
}


export default Header;