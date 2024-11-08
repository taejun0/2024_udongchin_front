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
    default: fontGenerator("NanumSquareRoundR", "1rem", "400", "1.5", "normal"),

    // NanumSaureRound 폰트 설정
    NanumSquareRoundR: fontGenerator("NanumSquareRoundR"),
    NanumSquareRoundL: fontGenerator("NanumSquareRoundL"),
    NanumSquareRoundB: fontGenerator("NanumSquareRoundB"),
    NanumSquareRoundEB: fontGenerator("NanumSquareRoundEB"),
    NanumSquareRoundOTFR: fontGenerator("NanumSquareRoundOTFR"),
    NanumSquareRoundOTFL: fontGenerator("NanumSquareRoundOTFL"),
    NanumSquareRoundOTFB: fontGenerator("NanumSquareRoundOTFB"),
    NanumSquareRoundOTFEB: fontGenerator("NanumSquareRoundOTFEB"),

  },
};
