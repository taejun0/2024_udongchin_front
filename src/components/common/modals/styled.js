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

export const ModalOverlay2 = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 44px);
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

  position: relative;
  
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

export const InformationHeader2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  gap: 5px;
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
   font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
   color: ${({theme}) => theme.colors.black};
   font-size: 10px;
   font-style: normal;
   font-weight: 800;
 `;

export const UserCreated = styled.div`
   font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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
   font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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


  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
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

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFL["font-family"]};
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
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
`;


export const SubText = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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

export const Radios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;

export const RadioLabel2 = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => (theme.colors.black)};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  margin-right: 4px;
  position: relative;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioLabel = styled.label`
display: flex;
align-items: center;
font-size: 8px;
color: #575757;
cursor: pointer;
gap: 5px;
font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const RadioButton = styled.input`
appearance: none;
display: flex;
width: 9px;
height: 9px;
padding: 2px;
align-items: center;
gap: 10px;
border: 1px solid #E3B05F;
background-color: #FFFF;
font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
border-radius: 50%;
position: relative;
cursor: pointer;

&:checked {
    background-color: #FFF;
}

&:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background-color: #E3B05F;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
`;

export const OtherReasonInput = styled.input`
display: flex;
width: 204px;
height: 34px;
padding: 5px 6px;
border: 1px solid #d1a355;
font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
border-radius: 3px;
font-style: normal;
font-weight: 700;
line-height: 12px; 
font-size: 8px;
color: ${({theme}) => theme.colors.darkgray};
outline: none;
`;

export const RModalSection = styled.div`
  display: flex;
  height: 89px;
  padding: 7px 20px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--gray, #ECECEC);
  background: var(--gray, #ECECEC);
  `;

  export const RModalSection2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

  export const RTextType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
`;


export const RSubText = styled.div`
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
  color: ${({theme}) => theme.colors.darkgray};
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
`;

export const ModalContent3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--light-yellow, #FFFFE5);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
`;

export const TextType3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  `;
  
export const Name = styled.div`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFEB["font-family"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const NameDetail = styled.div`
  color: ${({theme}) => theme.colors.darkgray};
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  margin-bottom: 40px;
  gap: 8px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.lightgray};
`;

export const InformationBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const InformationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 3px 7px;
  top: -20px;
  left: 0;
  border-radius: 2px;
  background: ${({theme}) => theme.colors.yellow_btn};

  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const InformationItem2 = styled.div`
  display: flex;

  color: ${({theme}) => theme.colors.darkgray};
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  gap: 6px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 8px;
`;

export const Infocontents = styled.div`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  
  min-width: 40px;
`;

export const VertiLINE = styled.div`
  width: 2px;
  height: 7px;
  background: ${({theme}) => theme.colors.Dyellow};
`;

export const BottomImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomImage = styled.img`
  position: absolute;
  display: flex;
  bottom: 0px;
  width: calc(113.5%);
  transform: translateY(40%);
`;
