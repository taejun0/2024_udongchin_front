import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "@components/layout/header/Header";
import { useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const location = useLocation();

  const HaveHeader = location.pathname === "/" || location.pathname === "/myudchistory";
  return (
    <>
      <Wrapper>
        {HaveHeader && <Header /> }
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

export default DefaultLayout;
