import styled from "styled-components";
import LoadingSpinnerIcon from "../Icons/LoadingSpinnerIcon";
import { LoadingSpinnerProps } from ".";

type StyledIconProps = {
  type: LoadingSpinnerProps["type"];
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
  font-size: ${({ type }) => (type === "innerSpinner" ? "1rem" : "4rem")};
  color: red;

  animation: spin 500ms linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
