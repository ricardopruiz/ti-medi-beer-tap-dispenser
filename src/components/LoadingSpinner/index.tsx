import { StyledIcon, StyledLoading } from "./LoadingSpinner.styled";

export type LoadingSpinnerProps = {
  type?: "innerSpinner" | "pageSpinner";
};

const LoadingSpinner = ({ type = "innerSpinner" }: LoadingSpinnerProps) => {
  return (
    <StyledLoading aria-label="loading-spinner-container">
      <StyledIcon type={type} />
    </StyledLoading>
  );
};

export default LoadingSpinner;
