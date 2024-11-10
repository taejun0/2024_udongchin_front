import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: sans-serif;
    background-color: #fff;
`;

export const Header = styled.header`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #4caf50;
    color: #fff;
`;

export const BackButton = styled.button`
    font-size: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const TitleText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubTitle = styled.div`
    display: flex;
    width: 358px;
    justify-content: space-between;
    align-items: center;
`;
