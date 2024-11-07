import styled, {css} from "styled-components";

export const MiniHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.lightyellow};

  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.PretendardB["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;

export const MainText1 = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.PretendardL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
`;

export const SubText1 = styled.div`
  color: ${({theme}) => theme.colors.darkgray};

  font-family: ${({theme}) => theme.fonts.PretendardL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;