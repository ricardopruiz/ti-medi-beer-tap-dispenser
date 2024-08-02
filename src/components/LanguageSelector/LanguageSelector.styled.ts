import styled from "styled-components";
import { LanguageSelectorProps } from ".";

type LanguageProps = {
  $isSelected: boolean;
  variant: LanguageSelectorProps["colorVariant"];
};

export const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  width: max-content;
`;

export const LanguageSelectorItem = styled.span<LanguageProps>`
  font-weight: bold;
  border-bottom: ${({ $isSelected, theme, variant }) =>
    $isSelected
      ? `2px solid ${
          variant === "primary"
            ? theme.colors.text.accent
            : theme.colors.text.contrast
        }`
      : "unset"};

  color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.text.default
      : theme.colors.text.contrast};

  cursor: pointer;
`;
