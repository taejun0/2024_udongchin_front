import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
`;

export const CustomImage = styled.img`
  display: flex;
  width: 23px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  margin: 10px 0px;
`;

export const FilterItem = styled.div`
  display: flex;
  cursor: pointer;

  width: 52px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 2.25px;

  border: 1px solid ${({ $isSelected, theme }) => ($isSelected ? theme.colors.yellow : "none")};
  background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.lightyellow : "none")};
`;

export const CustomImage2 = styled.img`

`;

export const Text = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

export const LINE = styled.div`
  width: 100%;
  height: 1px;
  margin: 8px 0px;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Filter2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

export const FilterItem2 = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 4px;

  color: ${({$isSelected, theme}) => $isSelected ? theme.colors.black : theme.colors.separate};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
`;

export const CustomImage3 = styled.img`
  width: 9px;
`;

export const Location = styled.div`
  display: flex;
  text-align: center;
  gap: 3px;
  color: ${({theme}) => theme.colors.darkgray};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: calc(100% / 4);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterSec = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSec = styled.div`
  display: flex;
  flex-direction: column;
`;