import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background-color: #fff;
`;

export const Header = styled.header`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4caf50;
    color: #fff;
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: 500;
    margin-right: 26px;
`;

export const BackButton = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    color: #000000;
`;

export const Subtitle = styled.h3`
    color: var(--black, #232323);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Location = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
`;

export const LocationText = styled.h3`
    color: var(--dark-gray, #575757);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`;


export const Nav = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;

export const subNav = styled.div`
    color: var(--GRAY, #989898);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    text-align: left;
    width: 90%;
`;


export const Bar = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;

export const WriteButton = styled.button`
    display: flex;
    width: 55px;
    height: 18px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 3px;
    border-radius: 2px;
    background: var(--Yellow, #E3B05F);
    padding: 1px 2px;
`;

export const WriteText = styled.p`
    color: var(--white, #FFF);
    /* 10 light */
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 140% */
`;

export const Main = styled.div`
    width:90%;
`;

export const Sortlist = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
`;

export const SortButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap:4px;
    color: ${props => (props.active ? "black" : "gray")};
    font-weight: ${props => (props.active ? "bold" : "normal")};

    img {
        filter: ${props => (props.active ? "none" : "grayscale(1)")};
    }
`;

export const Message = styled.p`
    width: 100%;
    text-align: center;
    color: #575757;
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0;
`;


// Boardstyled.js 파일에서
export const EmptyMessage = styled.div`
    font-size: 1.2em;
    color: #999;
    text-align: center;
    padding: 20px;
`;
