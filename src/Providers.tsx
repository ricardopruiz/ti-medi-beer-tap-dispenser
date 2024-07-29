import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
