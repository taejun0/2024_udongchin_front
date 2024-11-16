import * as S from "./styled";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import X from "/images/Vector.svg";
import Frontward from "/images/Frontward.svg";
import Backward from "/images/Backward.svg";
import mapmodal_bottom from "/images/mapmodal_bottom.svg";

import logo from "/images/logo.png";

export const MapModal = ({ location, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);


  return (
    <S.ModalOverlay >
      <S.ModalContent>
        <S.InformationHeader>
          <img src={logo} style={{width: "46px", height: "14px", cursor: "pointer", transform:"translateY(3px)"}} />
          <S.Buttons>
            <button onClick={onClose}><img src={X} style={{width: "12px", height: "12px", cursor: "pointer", transform:"translateY(3px)"}} /></button>
          </S.Buttons>
        </S.InformationHeader>
        <S.InformationHeader2>
          <S.Name>{location.title}</S.Name>
          <S.NameDetail>{location.subtitle}</S.NameDetail>
        </S.InformationHeader2>
        <img src={location.imageUrl} style={{width: "100%", height: "100%"}} />
        {currentStep === 1 && (
          <S.InformationBox>
            <S.InformationBoxHeader>
              <S.InformationItem>about 우동친</S.InformationItem>
              <S.InformationItem2><div style={{width: "7px"}}/>1/2<img src={Frontward} onClick={handleNextStep} style={{width: "7px", cursor: "pointer"}}/></S.InformationItem2>
            </S.InformationBoxHeader>
            <S.Infos>
              <S.Infocontents>활동 시간</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>{location.time}</S.Infocontents>
            </S.Infos>
            <S.Infos>
              <S.Infocontents>먹이</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>{location.eat}</S.Infocontents>
            </S.Infos>
            <S.Infos>
              <S.Infocontents>서식지</S.Infocontents>
              <S.VertiLINE />
              <S.Infocontents>{location.live}</S.Infocontents>
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
            <S.Infocontents>{location.with}</S.Infocontents>
          </S.InformationBox>
        )}
        <S.BottomImageWrap><S.BottomImage src={mapmodal_bottom} /></S.BottomImageWrap>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}