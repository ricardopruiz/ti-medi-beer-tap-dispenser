import styled from "styled-components";

type LanguageProps = {
  $isSelected: boolean;
};

export const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  width: max-content;
`;

export const LanguageSelectorItem = styled.span<LanguageProps>`
  font-weight: bold;
  border-bottom: ${({ $isSelected, theme }) =>
    $isSelected ? `2px solid ${theme.colors.primary.main}` : "unset"};

  cursor: pointer;
`;
