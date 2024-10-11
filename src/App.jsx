import { ThemeProvider } from "styled-components";
import { theme } from "@styles/Theme";
import GlobalStyle from "@styles/GlobalStyles";

import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* 임시 텍스트 추가 */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to My PWA App!</h1>
      </div>
    </ThemeProvider>
  );
};
