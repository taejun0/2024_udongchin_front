import * as S from "./styled";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import X from "/images/Vector.svg";
import Frontward from "/images/Frontward.svg";
import Backward from "/images/Backward.svg";
import mapmodal_bottom from "/images/mapmodal_bottom.svg";

export const MapModal = (onClose) => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);


  return (
    <S.ModalOverlay >
      <S.ModalContent>
        <S.InformationHeader>
          <button onClick={onClose}><img src={X} style={{width: "12px", height: "12px", cursor: "pointer", transform:"translateY(3px)"}} /></button>
          <S.Buttons>
            <button onClick={onClose}><img src={X} style={{width: "12px", height: "12px", cursor: "pointer", transform:"translateY(3px)"}} /></button>
          </S.Buttons>
        </S.InformationHeader>
        <S.InformationHeader2>
          <S.Name>다람쥐</S.Name>
          <S.NameDetail>뭐시기</S.NameDetail>
        </S.InformationHeader2>
        <img src={X} style={{width: "100%", height: "100%"}} />
        {currentStep === 1 && (
          <S.InformationBox>
            <S.InformationBoxHeader>
              <S.InformationItem>about 우동친</S.InformationItem>
              <S.InformationItem2><div style={{width: "7px"}}/>1/2<img src={Frontward} onClick={handleNextStep} style={{width: "7px", cursor: "pointer"}}/></S.InformationItem2>
            </S.InformationBoxHeader>
            <S.Infos>
              <S.Infocontents>활동 시간</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>주로 낮</S.Infocontents>
            </S.Infos>
            <S.Infos>
              <S.Infocontents>먹이</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>도토리</S.Infocontents>
            </S.Infos>
            <S.Infos>
              <S.Infocontents>서식지</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>산림</S.Infocontents>
            </S.Infos>
          </S.InformationBox>
        )}
        {currentStep === 2 && (
          <S.InformationBox>
            <S.InformationBoxHeader>
              <S.InformationItem>about 우동친</S.InformationItem>
              <S.InformationItem2><img src={Backward} onClick={handlePrevStep} style={{width: "7px", cursor: "pointer"}}/>2/2<div style={{width: "7px"}}/></S.InformationItem2>
            </S.InformationBoxHeader>
            <S.Infos>
              <S.Infocontents>공생방법</S.Infocontents>
              <S.VertiLINE />
            </S.Infos>
            <S.Infocontents>다람쥐를 위해 길가의 열매를 함부로 줍지 말아주세요 !</S.Infocontents>
          </S.InformationBox>
        )}
        <S.BottomImageWrap><S.BottomImage src={mapmodal_bottom} /></S.BottomImageWrap>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}