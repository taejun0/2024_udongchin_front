import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
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

export const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 16px;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const BoardButton = styled.button`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 100%;
`;

export const TitleText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const TextTitle = styled.h1`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-weight: 800;
    margin: 0;
`;

export const SubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 4px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const DateText = styled.p`
    font-size: 12px;
    color: #888;
    margin: 0;
`;

export const CategoryButton = styled.button`
    border-radius: 2px;
    border: 1px solid #43CD5E;
    background-color: #FFF;
    color: #43CD5E;
    font-size: 12px;
    padding: 4px 8px;
    cursor: pointer;
`;

export const MapButton = styled.button`
    border-radius: 2px;
    border: 1px solid var(--GRAY, #989898);
    background: #FFF;
    color: #575757;
    font-size: 12px;
    padding: 4px 8px;
    cursor: pointer;
`;

export const ReportButton = styled.button`
    background-color: #f2c94c;
    color: white;
    font-size: 12px;
    border: none;
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 200px;
    background-color: #d9d9d9;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const ContentText = styled.div`
    width: 100%;
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
    padding: 5px;
`;

export const BottomBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    color: #888;
    gap: 10px;
    margin-bottom: 16px;
`;

export const IconText = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
`;

export const CommentContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background: #f4f4f4;
    padding: 8px;
    border-radius: 8px;
`;
