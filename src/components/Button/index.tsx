import { ButtonHTMLAttributes, ReactNode } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { StyledButton } from "./Button.styled";

type ButtonProps = {
  loading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ loading = false, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {loading ? (
        <LoadingSpinner type="innerSpinner" color="white" />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
