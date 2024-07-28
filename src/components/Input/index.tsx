import { ChangeEvent } from "react";
import { StyledInput } from "./Input.styled";

type InputProps = {
  value: string;
  placeholder?: string;
  type: "text" | "password";
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ value, placeholder, type, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
