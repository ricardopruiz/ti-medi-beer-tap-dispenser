import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
