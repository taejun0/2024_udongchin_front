import styled, {keyframes} from "styled-components";

const circleExpand = keyframes`
  from {
    clip-path: circle(0% at 0 0);
  }
  to {
    clip-path: circle(150% at 0 0);
  }
`;

const circleDeExpand = keyframes`
  from {
    clip-path: circle(150% at 0 0);
  }
  to {
    clip-path: circle(0% at 0 0);
  }
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  background-color: ${({theme}) => theme.colors.white};

  animation: ${circleExpand} 0.8s ease-out;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;

  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

export const LeftImage = styled.img`
  position: absolute;
  cursor: pointer;
  left: 16px;
  width: 16px;
  height: 16px;

  fill: #000;
`;

export const RightImage = styled.img`
  position: absolute;
  cursor: pointer;
  right: 12px;
  width: 12px;
  height: 16px;
`;

export const Box = styled.div`
  display: flex;
  height: 56px;
  padding: 20px;
  align-items: center;

  color: #000;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-bottom: 1px solid ${({theme}) => theme.colors.lightgray};
`;