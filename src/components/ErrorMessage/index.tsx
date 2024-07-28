import { ReactNode } from "react";
import { StyledError } from "./ErrorMessage.styled";

type ErrorMessageTypes = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageTypes) => {
  return <StyledError>{children}</StyledError>;
};

export default ErrorMessage;
