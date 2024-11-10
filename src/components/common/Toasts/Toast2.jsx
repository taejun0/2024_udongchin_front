import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Example scheduled messages
const scheduledMessages = [
  "타 동네에서는 긴급 건과 Q&A만 열람 가능합니다.",
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

const Toast2 = () => {
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

export default Toast2;
