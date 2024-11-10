import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Example scheduled messages
const scheduledMessages = [
  "모르는 동물이 있다면 실시간 Q&A로 모든 동네 사람들에게 물어보아요.",
  "새끼 야생동물 근처에는 어미가 있을 수 있으니 주의해 주세요!",
  "허가받지 않은 야생동물 사육은 불법입니다.",
  "우리 눈에 보이는 것보다 훨씬 많은 동물들이 함께 살고 있답니다.",
  "긴급한 상태의 동물이 있다면 긴급 건 전환으로 모두에게 알려보아요.",
];

// Styled component for the toast bar
const ToastBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  width: 320px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({theme}) => theme.colors.white};

  font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;

  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 3.2px 0px rgba(0, 0, 0, 0.25);
  
  transition: opacity 0.5s ease;
`;

const Toast1 = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        (prevIndex + 1) % scheduledMessages.length
      );
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ToastBar>
      {scheduledMessages[currentMessageIndex]}
    </ToastBar>
  );
};

export default Toast1;
