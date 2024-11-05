import styled from "styled-components";

export const MapSize = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 44px);
`;

export const Nowlocation = styled.div`
  position: absolute;
  top: 20px;
  z-index: 10;
`;

export const Address = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
  align-items: center;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const Notice = styled.div`
  display: flex;
  position: absolute;
  top: 10px;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

export const Location = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  padding: 5px 10px;

  border-radius: 4.8px;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0px 0px 3.2px 0px rgba(0, 0, 0, 0.25);

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

export const FixButton = styled.button`
  display: flex;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 800;

  cursor: pointer;
`;