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
    height: calc(100vh - 60px); /* 헤더 높이를 제외한 화면 높이 설정 */
    overflow-y: auto; /* 세로 스크롤 활성화 */
    `;

    export const LoginTitle = styled.h2`
    font-weight: bold;
    margin: 40px 0;
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
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
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
    font-size: 14px
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


export const ErrorMessage = styled.p`
  color: var(--RED2, #FF8B8D);
  font-size: 10px;
  margin-top: 5px;
`;

// styled.js

export const CheckBoxContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 7px;
    margin-top: 8px;
    font-size: 12px;
    color: #575757;

    input[type="checkbox"] {
        appearance: none; /* 기본 체크박스 스타일 제거 */
        width: 13.5px;
        height: 13.5px;
        border-radius: 30px;
        border: 1.5px solid var(--dark-yellow, #5B3200);
        background-color: #FFF;
        position: relative;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease;

        &:checked {
            background-color: #FFF; /* 체크 상태에서 배경색 유지 */
        }

        &:checked::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 7.5px;
            height: 7.5px;
            background-color: #5B3200; /* 내부 원 색상 */
            border-radius: 30px;
        }
    }

    label {
        cursor: pointer;
        margin-right:15px;
    }
`;



export const FormGroup2 = styled.div`
    text-align: center;
    margin: 10px 0;
    color: var(--white, #FFF);
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

export const Label1 = styled.div`
    font-size: 11.063px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; 
`;

export const Label2 = styled.div`
    font-size: 15.488px;
    font-style: normal;
    font-weight: 800;
    line-height: 25px;
`;

export const Divider = styled.div`
    font-size: 25px;
    margin: 18px 0;
    background: linear-gradient(90deg, #565656 0%, #CCC 64%, #FFF 100%); /* 90도 회전된 그라데이션 */
    -webkit-background-clip: text;
    color: transparent;
    transform: rotate(90deg); /* 텍스트 자체를 90도 회전 */
    display: inline-block; 
`;


export const Label3 = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 29.5px; /* 245.837% */
    margin-bottom : 5px;
`;

export const Label4 = styled.div`
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
`;

export const Label5 = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 25px; /* 156.25% */
    margin-top: 50px;
`;

export const Divider2 = styled.div`
    width: 35%;         
    height: 1px;         
    background-color: #ccc; 
    color : transparent;
    margin: 80px 0;       
`;


export const EarthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const EarthImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const AppLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;
    margin-bottom: 40px
`;


export const Label6 = styled.div`
    color: var(--white, #FFF);
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.849px; /* 188.493% */
    letter-spacing: 0.5px;
`;

export const AppDescription = styled.div`
    color: var(--white, #FFF);
    text-align: center;
    font-size: 10.995px;
    font-style: normal;
    font-weight: 800;
    line-height: 23px; /* 209.178% */
    letter-spacing: 0.55px;
`;

export const AppTagline = styled.div`
    color: var(--white, #FFF);
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: 23px;
    letter-spacing: 0.65px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    margin:20px 0;
`;

export const NextButton = styled.button`
    background-color: #5b3200;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
`;



export const Label7 = styled.div`
    color: var(--dark-yellow, #5B3200);
    text-align: center;
    -webkit-text-stroke-width: 0.10000000149011612;
    -webkit-text-stroke-color: #000;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFB["font-family"]};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 83.333% */
`;

export const Label8 = styled.div`
    color: var(--black, #232323);
    text-align: center;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px; /* 155.556% */
    margin:15px 0;
`;