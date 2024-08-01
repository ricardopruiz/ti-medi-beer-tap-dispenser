import { StyledIcon, StyledLoading } from "./LoadingSpinner.styled";

export type LoadingSpinnerProps = {
  type: "innerSpinner" | "pageSpinner";
  color: "white" | "black" | "accent";
};

const LoadingSpinner = ({ type, color }: LoadingSpinnerProps) => {
  return (
    <StyledLoading aria-label="loading-spinner-container">
      <StyledIcon type={type} color={color} />
    </StyledLoading>
  );
};

export default LoadingSpinner;
