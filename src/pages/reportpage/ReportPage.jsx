import React, { useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { StepOne } from "@components/specific/reportSteps/StepOne";
import { StepTwo } from "@components/specific/reportSteps/StepTwo";
import { StepThree } from "@components/specific/reportSteps/StepThree";
import { StepFour } from "@components/specific/reportSteps/StepFour";
import { useReport } from "@hooks/useReport";
import backward from "/images/Backward.svg"
import X from "/images/Vector.svg";
import { useLocation } from '@contexts/LocationContext';
import nowlocation from '/images/nowlocation.svg';

export const ReportPage = () => {
  const {location, address} = useLocation();
  const { updateStepData, submitFinalReport, loading, error } = useReport();
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    await submitFinalReport();
  };

  return (
    <div>
      <S.MiniHeader>
        {currentStep === 1 && (
          <div style={{width:8}}></div>
        )}
        {currentStep > 1 && (
          <img src={backward} onClick={handlePrevStep} style={{ cursor: "pointer" }} />
        )}
        우리 동네 친구들 제보
        <img src={X} onClick={() => navigate(-1)} style={{width: "12px", height: "12px", cursor: "pointer"}}/>
      </S.MiniHeader>
      <S.Section1>
        {address ? (
          <S.MainText1>작성자 위치<img src={nowlocation} style={{width: "9px"}}/> {address}</S.MainText1>
        ): (
          <>안뜸</>
        )}
        <S.SubText1>현재 지도에 올라와있지 않은, 직접 목격한 우리 동네 동물들을 제보해 주세요.<br />더욱 구체적이고 자세한 정보로 제보할수록 지도에 업로드 될 확률이 높아집니다!</S.SubText1>
      </S.Section1>
      {currentStep === 1 && <StepOne onNext={handleNextStep} updateData={updateStepData} />}
      {currentStep === 2 && <StepTwo onNext={handleNextStep} updateData={updateStepData} />}
      {currentStep === 3 && <StepThree onNext={handleNextStep} updateData={updateStepData} />}
      {currentStep === 4 && <StepFour onNext={handleSubmit} updateData={updateStepData} />}


      {loading && <p>Submitting...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};