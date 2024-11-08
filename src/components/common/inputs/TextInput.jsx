import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    display: flex;
    align-items: flex-start;
    padding: 10px 12px;
    border-radius: 5px;
    width: 100%;
    background-color: #ececec;
    outline: none;
    color: #575757;
    resize: none;
    overflow: hidden;
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    resize: none;
`;

function TextInput(props) {
    const { height, value, onChange, placeholder } = props;

    return (
        <StyledTextarea
            height={height}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}


export default TextInput;