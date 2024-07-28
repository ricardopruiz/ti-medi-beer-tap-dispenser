import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.roundLight};
  box-shadow: ${({ theme }) => theme.elevations.small};

  height: 2rem;
  padding: 0.25rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;
