import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

// 나눔 스퀘어 라운드 폰트 설정
@font-face {
    font-family: "NanumSquareRoundOTFEB";
    src: url("/fonts/NanumSquareRoundOTFEB.otf") format("opentype");
}

// 프리텐다드 폰트 설정

@font-face {
    font-family: "Pretendard-Black";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Black.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-Bold";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Bold.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-ExtraBold";
    src: url("/images/fonts/pretendardwoff2/Pretendard-ExtraBold.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-ExtraLight";
    src: url("/images/fonts/pretendardwoff2/Pretendard-ExtraLight.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-ExtraLight.woff") format("woff");
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-Light";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Light.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-Medium";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Medium.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-Regular";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Regular.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-SemiBold";
    src: url("/images/fonts/pretendardwoff2/Pretendard-SemiBold.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: "Pretendard-Thin";
    src: url("/images/fonts/pretendardwoff2/Pretendard-Thin.woff2") format("woff2"),
         url("/images/fonts/pretendardwoff/Pretendard-Thin.woff") format("woff");
    font-weight: 100;
    font-style: normal;
}


// 초기 html 설정
html {
	/* background-color: ${({ theme }) => theme.colors.fall};	 */
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}
}

body {
	width: 100%;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.default};
	font-family: "Pretendard-Regular", "NanumSquareRoundOTFEB", "sans-serif";
}

`;

export default GlobalStyle;
