import styled from "styled-components";
import LoadingSpinnerIcon from "../Icons/LoadingSpinnerIcon";
import { LoadingSpinnerProps } from ".";
import { DefaultTheme } from "styled-components/dist/types";

type StyledIconProps = {
  type: LoadingSpinnerProps["type"];
  color: LoadingSpinnerProps["color"];
};

const getColor = (color: LoadingSpinnerProps["color"], theme: DefaultTheme) => {
  const colors: Record<LoadingSpinnerProps["color"], string> = {
    black: theme.colors.text.default,
    accent: theme.colors.text.accent,
    white: theme.colors.text.contrast,
  };

  return colors[color];
};

export const StyledLoading = styled.div.attrs({
  "aria-label": "loading-spinner-container",
})`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(LoadingSpinnerIcon)<StyledIconProps>`
  font-size: ${({ type }) => (type === "innerSpinner" ? "1rem" : "7rem")};
  color: ${({ theme, color }) => getColor(color, theme)};

  animation: spin 500ms linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
