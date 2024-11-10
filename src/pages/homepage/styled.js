import styled, {css} from "styled-components";

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 40px;
  left: 20px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 60px;

  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.3); // 클릭 시 살짝 확대
  }
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const ExpandableButton = styled(Button)`
  position: absolute;
  transition: transform 0.4s ${({ $delay }) => $delay || 0}s ease-out;
  ${({ $isExpand, $delay }) =>
    $isExpand
      ? css`
          transform: translateX(${$delay * 500}px);
          opacity: 1;
          pointer-events: auto;
        `
      : css`
        transition: none;
        transform: translateX(0px);
        opacity: 0;
        pointer-events: none;
      `};
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60px;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const ExpandableButton2 = styled(Button)`
  position: absolute;
  left: 50px;
  transition: transform 0.4s ${({ $delay }) => $delay || 0}s ease-out;
  ${({ $isExpand, $delay }) =>
    $isExpand
      ? css`
          transform: translateX(${$delay * 500}px);
          opacity: 1;
          pointer-events: auto;
        `
      : css`
        transition: none;
        transform: translateX(0px);
        transition: transform 0.4s ease-out, opacity 0.4s ease-out;
      `};
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60px;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

`;



export const SideButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 10px;
`;

export const SideButton = styled.div`
  position: relative;
  width: 70px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  z-index: 10;

  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.3); // 클릭 시 살짝 확대
  }

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const SideButton1 = styled.div`
  position: absolute;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  transition: transform 0.3s ease;
  
  ${({ $isExpand2 }) =>
    $isExpand2
      ? css`
          transform: translateY(70px); // 내려오는 거리 조정
        `
      : css`
          transform: translateY(0px);
        `};

  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const SideButton2 = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
  opacity: 0;
  
  ${({ $isExpand2 }) =>
    $isExpand2
      ? css`
          transform: translateY(70px);
          opacity: 1;
        `
      : css`
          transform: translateY(0px);
        `};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const RightLowButton = styled.button`

  position: absolute;
  right: 30px;
  bottom: 40px;

  transition: transform 0.4s ease;

  &:active {
    transform: scale(1.3); // 클릭 시 살짝 확대
  }

cursor: pointer;
`;

export const ImageRightLow = styled.img`
  width: 100%;
`;

export const SelectBox = styled.div`
  display: flex;
  position: absolute;
  z-index: 50;
  top: -36px;
  right: 10px;
`;

export const SelectL = styled.div`
  display: flex;
  width: 43px;
  height: 27px;
  justify-content: center;
  align-items: center;
  border-radius: 14px 0px 0px 14px;
  cursor: pointer;

  background-color: ${({theme, $Selected}) => $Selected ? theme.colors.darkyellow : theme.colors.white};
  color: ${({theme, $Selected}) => $Selected ? theme.colors.white : theme.colors.black};

  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const SelectR = styled.div`
  display: flex;
  width: 43px;
  height: 27px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 14px 14px 0px;
  cursor: pointer;

  background-color: ${({theme, $Selected}) => $Selected ? theme.colors.darkyellow : theme.colors.white};
  color: ${({theme, $Selected}) => $Selected ? theme.colors.white : theme.colors.black};

  font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  transition: background-color 0.3s ease, color 0.3s ease;
`;