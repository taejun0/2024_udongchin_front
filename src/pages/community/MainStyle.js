import styled from "styled-components";

// Styled Components
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: sans-serif;
    background-color: #fff;
`;

export const Header = styled.header`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    align-items: center;
    background-color: #4CAF50;
    color: #fff;
`;

export const BackButton = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    margin-left: 21px;
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: 500;
    margin-right: 26px;
    font-style: normal;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const Location = styled.div`
    font-size: 18px;
    font-weight: 600;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const Subtitle = styled.h3`
    color: var(--dark-gray, #575757);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const HelpSection = styled.div`
    width: 90%;
    text-align: flex-start;
    font-size: 14px;
    font-weight: 600;
`;

export const Nav = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;

export const Content = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 5px;
`;

export const SectionContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`;

export const TitleBoard = styled.h4`
    color: var(--black, #232323);
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width:100%;
`;

export const Description = styled.p`
    color: var(--dark-gray, #575757);
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 150% */
    align-items: flex-start;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 10px;
    gap: 7px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 2px;
    border: 1px solid var(--GRAY, #989898);
    background: var(--white, #FFF);
`;

export const HelpContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const HelpText = styled.p`
    color: var(--black, #232323);
    font-size: 12px;
    font-style: normal;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-weight: 500;
    line-height: 18px; /* 150% */
`;

export const Description2 = styled.p`
    color: var(--black, #232323);
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 150% */
`;

export const ArrowButton2 = styled.button`
    background: none;
    border: none;
    width: 100%;
    font-size: 18px;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color: #333;
`;
