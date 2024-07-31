import colors from "./foundations/colors";
import breakpoints from "./foundations/breakpoints";
import elevations from "./foundations/elevations";

const theme = {
  colors: {
    primary: {
      main: colors.orange,
      light: colors.orangeLight,
      dark: colors.orangeDark,
    },
    text: {
      default: colors.black,
      contrast: colors.white,
      accent: colors.orange,
    },
    disabled: {
      main: colors.gray,
      light: colors.grayLight,
      dark: colors.grayDark,
    },
    status: {
      danger: colors.red,
      correct: colors.green,
      info: colors.blue,
      warning: colors.yellow,
    },
    background: {
      default: colors.white,
      contrast: colors.black,
      accent: colors.orange,
    },
  },
  breakpoint: {
    tablet: breakpoints.tablet,
    desktop: breakpoints.desktop,
  },
  elevations: {
    button: elevations.medium,
    form: elevations.small,
  },
  borderRadius: {
    round: "50%",
    roundHard: "16px",
    roundLight: "8px",
    flat: "none",
  },
};

export default theme;
