import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/GlobalStyles";

import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router";

import { LocationProvider } from "@contexts/LocationContext";

export const App = () => {
  return (
    <LocationProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocationProvider>
  );
};
