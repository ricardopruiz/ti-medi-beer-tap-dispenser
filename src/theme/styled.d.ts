import "styled-components";

export type BorderRadius = {
  round: string;
  roundHard: string;
  roundLight: string;
  flat: string;
};

export type Breakpoint = {
  tablet: string;
  desktop: string;
};

export type Colors = {
  primary: {
    main: string;
    light: string;
    dark: string;
  };
  text: {
    default: string;
    contrast: string;
    accent: string;
  };
  disabled: {
    main: string;
    light: string;
    dark: string;
  };
  status: {
    danger: string;
    correct: string;
    info: string;
    warning: string;
  };
  background: {
    default: string;
    contrast: string;
    accent: string;
  };
};

export type Elevations = {
  button: string;
  form: string;
};

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    breakpoint: Breakpoint;
    elevations: Elevations;
    borderRadius: BorderRadius;
  }
}
