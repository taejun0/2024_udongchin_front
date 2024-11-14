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
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-bottom: 1px solid ${({theme}) => theme.colors.lightgray};
`;





export const ProfileSection = styled.div`
  display: flex;
  height: 118.213px;
  padding: 17px 23px;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
`;

export const ImgSection = styled.div`
  width: 80px;
  height: 80px;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const InfoSection = styled.div`
  display: flex;
  width: 233px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const Myprofile = styled.div`
  display: flex;
  width: 61.508px;
  height: 18.192px;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 0.866px solid var(--Yellow, #E3B05F);
  background: var(--yellow, #FFFED3);
  color: var(--black, #232323);
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 10.396px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const UserName = styled.div`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserId = styled.div`
  color: var(--dark-gray, #575757);

  /* 12 llight */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
