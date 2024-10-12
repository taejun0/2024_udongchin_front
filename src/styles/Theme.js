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
  },

  fonts: {
    default: fontGenerator("Pretendard-Ragular", "1rem", "400", "1.5", "normal"),

    // Apple SD 산돌고딕 Neo 폰트 설정
    Pretendard_Bold: fontGenerator("Pretendard-Bold"),
  },
};
