import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/GlobalStyles";

import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router";

import { LocationProvider } from "@contexts/LocationContext";
import { AuthProvider } from "@contexts/AuthContext";

export const App = () => {
  return (
    <AuthProvider >
      <LocationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
