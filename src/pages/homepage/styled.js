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
  
`;

export const ExpandableButton = styled(Button)`
  position: absolute;
  transition: transform 0.4s ${({ $delay }) => $delay || 0}s ease-out;
  ${({ $isExpand, $delay }) =>
    $isExpand
      ? css`
          transform: translateX(${$delay * 700}px);
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

export const SideButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 60px;
  right: 10px;
`;

export const SideButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;