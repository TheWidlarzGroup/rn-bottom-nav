import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";

import { darkTheme, theme } from "./utils/theme";

export const Main = () => {
  // FIXME: read from user preferences
  const darkMode = false;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <SafeAreaProvider></SafeAreaProvider>
    </ThemeProvider>
  );
};
