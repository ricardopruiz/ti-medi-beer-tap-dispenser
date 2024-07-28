import { ReactNode } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { StyledButton } from "./FormButton.styled";

type FormButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  onClick?(): void;
  children: ReactNode;
};

const FormButton = ({
  disabled,
  loading = false,
  onClick,
  children,
}: FormButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {loading ? <LoadingSpinner type="innerSpinner" /> : children}
    </StyledButton>
  );
};

export default FormButton;
