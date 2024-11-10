    // styled.js

    import styled from 'styled-components';

    export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 668px;
    width: 100%;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background-color: #fff;
    `;

    export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px;
    border-bottom: 1px solid #989898;
    `;

    export const BackButton = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
    `;

    export const Title = styled.h1`
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    `;

    export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 48px;
    `;

    export const LoginTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    `;

    export const Label = styled.label`
    width: 100%;
    margin-bottom: 22px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #232323;
    `;

    export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 12px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    border-radius: 5px;
    border: none;
    background-color: #ececec;
    outline: none;
    `;

    export const LoginButton = styled.button`
    width: 100%;
    padding: 11px;
    margin-top: 30px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #fff;
    background-color: #5b3200;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

    export const SignupButton = styled.button`
    width: 100%;
    padding: 11px;
    margin-top: 15px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #232323;
    background-color: #ffffe5;
    border: 1.5px solid #e3b05f;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    border-radius: 5px;
    cursor: pointer;
    `;





export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 668px;
    width: 100%;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    background-color: #fff;
`;

export const FormGroup = styled.div`
    margin-bottom: 30px;
    width: 100%;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 12px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    border-radius: 5px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    border: none;
    background-color: #ececec;
    outline: none;
`;

export const InputWithCheck = styled.div`
    display: flex;
    align-items: center;
`;

export const CheckButton = styled.button`
    width: 43px;
    height: 16px;
    margin-left: 12px;
    font-size: 8px;
    background-color: #fff;
    border: 0.8px solid #575757;
    color: #575757;
    border-radius: 2px;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px;
    margin-top: 40px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    background-color: #5b3200;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

