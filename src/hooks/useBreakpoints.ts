import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

const useBreakpoints = () => {
  const { breakpoint } = useTheme();

  const isDesktop = useMediaQuery({ minWidth: breakpoint.desktop });
  const isTablet = useMediaQuery({
    minWidth: breakpoint.tablet,
  });
  const isMobile = !isDesktop && !isTablet;

  return { isDesktop, isTablet, isMobile };
};

export default useBreakpoints;
