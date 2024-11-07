const fontGenerator = (
  fontFamily,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    default: "#000000",
    white: "#FFFFFF",
    black: "#232323",
    gray: "#ECECEC",
    darkgray: "#575757",
    separate: "#989898",
    yellow: "#E3B05F",
    lightyellow: "#FFFFE5",
    darkyellow: "#5B3200",
    headerColor: "#43CD5E",
    lightgray: "#EFEFEF",
  },

  fonts: {
    default: fontGenerator("PretendardR", "1rem", "400", "1.5", "normal"),

    // NanumSaureRound 폰트 설정
    NanumSquareRoundOTFEB: fontGenerator("NanumSquareRoundOTFEB"),

    // Pretendard 폰트 설정
    PretendardT: fontGenerator("Pretendard-Thin"),
    PretendardEL: fontGenerator("Pretendard-ExtraLight"),
    PretendardL: fontGenerator("Pretendard-Light"),
    PretendardR: fontGenerator("Pretendard-Regular"),
    PretendardM: fontGenerator("Pretendard-Medium"),
    PretendardSB: fontGenerator("Pretendard-SemiBold"),
    PretendardB: fontGenerator("Pretendard-Bold"),
    PretendardEB: fontGenerator("Pretendard-ExtraBold"),
    PretendardBlack: fontGenerator("Pretendard-Black"),
  },
};
