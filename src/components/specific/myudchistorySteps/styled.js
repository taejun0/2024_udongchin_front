import styled from "styled-components";


export const Title = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
`;

export const SubText = styled.div`
  color: ${({theme}) => theme.colors.darkgray};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  margin-bottom: 14px;
`;

export const LINE = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background: ${({theme}) => theme.colors.gray};
`;

export const Images = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CustomImage = styled.img`
  display: flex;
  width: 78px;
`;

export const ImageSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
`;

