import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Radios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => (theme.colors.black)};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 12px;
  font-weight: 700;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  margin-right: 8px;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.yellow};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Textarea = styled.textarea`
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 5px;
  min-height: 80px;
  background-color: ${({theme}) => theme.colors.gray};
  outline: none;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  resize: none;
`;

export const Textarea280 = styled.textarea`
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.gray};
  outline: none;
  min-height: 280px;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  resize: none;
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 40px;
  border-radius: 5px;
  position: absolute;
  bottom: 30px;
  cursor: pointer;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  background-color: ${({theme}) => theme.colors.darkyellow};
  color: ${({theme}) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0 20px 0;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkyellow};
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease;
`;

export const MainText2 = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 800;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;