import { StyledIcon, StyledLoading } from "./LoadingSpinner.styled";

export type LoadingSpinnerProps = {
  type: "innerSpinner" | "pageSpinner";
  color: "white" | "black" | "accent";
};
/**
 * This component allow to show an spinner. It has two types,
 * innerSpinner, perfect to insert in small components like a button
 * or pageSpinner ideal for big components like a table
 */

const LoadingSpinner = ({ type, color }: LoadingSpinnerProps) => {
  return (
    <StyledLoading aria-label="loading-spinner-container">
      <StyledIcon type={type} color={color} />
    </StyledLoading>
  );
};

export default LoadingSpinner;
