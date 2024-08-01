import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.contrast};
  border-radius: ${({ theme }) => theme.borderRadius.roundLight};
  font-size: 1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  padding: calc(0.25rem) 1rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled.main};
    color: ${({ theme }) => theme.colors.disabled.dark};

    cursor: not-allowed;
  }
`;
