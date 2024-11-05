// styled.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  
  box-shadow : ${({ $Urgent }) => $Urgent ? "0px 0px 15px 5px #FFA9AB" : "none"};
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalSection2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalSection3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InformationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};

  font-size: 10px;
  font-style: normal;
  font-weight: 800;
`;

export const UserCreated = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};

  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const RowBetween = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeartRaTe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

export const HeartCount = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const LinePad = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray};

  margin: 16px 0 ;
`;


export const ToggleButton = styled.div`
  display: flex;
  
  gap: 10px;
  margin-top: 10px;
`;

export const ToggleOption = styled.div`
  padding: 4px 8px;
  border-radius: 5px;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.darkyellow : theme.colors.yellow};
  cursor: pointer;

  text-align: center;


  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.white};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const LINE = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.separate};
`;

export const TextInput = styled.textarea`
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.gray};
  outline: none;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  resize: none;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  height: 32px;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: none;
  cursor: ${({ $isSubmitEnabled }) => ($isSubmitEnabled ? "pointer" : "not-allowed")};
  background-color: ${({ $isSubmitEnabled, theme }) => 
    $isSubmitEnabled ? theme.colors.yellow : theme.colors.darkgray}; // 활성화 색상과 비활성화 색상
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $isSubmitEnabled }) => ($isSubmitEnabled ? 1 : 0.6)};
  transition: background-color 0.3s ease, opacity 0.3s ease;
`;

export const TextType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
`;

export const InfoTitle = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
`;

export const InfoContent = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;


export const SubTextType = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
`;


export const SubText = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const ModalContent2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
`;


export const TextType2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
`;

export const SubText2 = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.div`
  display: flex;
  width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 36px;
  background: ${(props) => props.color || "#ddd"};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.white};
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const CommentText = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const CommentText2 = styled.div`
  cursor: pointer;
  
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.separate};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;