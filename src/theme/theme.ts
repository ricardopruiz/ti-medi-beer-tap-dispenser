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
    },
    status: {
      danger: colors.red,
      correct: colors.green,
      info: colors.blue,
      warning: colors.yellow,
    },
  },
  device: {
    mobile: breakpoints.small,
    desktop: breakpoints.big,
  },
  elevations: {
    button: elevations.medium,
    form: elevations.small,
  },
  borderRadius: {
    round: "16px",
    roundLight: "8px",
    flat: "none",
  },
};

export default theme;
