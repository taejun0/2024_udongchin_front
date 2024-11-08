import React from "react";
import * as S from "./styled";
import { MyudchistoryStepOne } from "@components/specific/myudchistorySteps/MyudchistoryStepOne";
import { MyudchistoryStepTwo } from "@components/specific/myudchistorySteps/MyudchistoryStepTwo";
import { useNavigate, useLocation } from "react-router-dom";

export const MyudchistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentStep = new URLSearchParams(location.search).get("step") || "1";

  const handleNextStep = () => {
    navigate(`?step=${parseInt(currentStep) + 1}`);
  };

  const handlePrevStep = () => {
    if (parseInt(currentStep) > 1) {
      navigate(`?step=${parseInt(currentStep) - 1}`);
    }
  };

  return (
    <S.Wrapper>
      {currentStep === "1" && <MyudchistoryStepOne onNext={handleNextStep} />}
      {currentStep === "2" && <MyudchistoryStepTwo />}
    </S.Wrapper>
  );
};
