import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${(props) =>
      props.height &&
      `
      height: ${props.height}px;
    `}
    background-color: ${(props) => props.backgroundColor || "transparent"};
    color: ${(props) => props.color || "black"};
`;

// PostButton 컴포넌트에서 backgroundColor와 color를 props로 받아
// StyledButton의 스타일에 적용하도록 설정했습니다.
function PostButton(props) {
  const { height, title, onClick, backgroundColor, color } = props;

  return (
    <StyledButton
      height={height}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {title || "button"}
    </StyledButton>
  );
}

export default PostButton;
