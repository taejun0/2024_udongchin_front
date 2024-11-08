import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;

  background: ${({theme}) => theme.colors.headerColor};
`;

export const Wrapper2 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;

  background: ${({theme}) => theme.colors.white};
`;

export const Image = styled.img`
  position: absolute;
  cursor: pointer;
  left: 16px;
  width: 16px;
  height: 16px;
`;

export const Text = styled.div`
  position: absolute;
  right: 16px;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({theme}) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;