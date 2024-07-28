import styled from "styled-components";

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.status.danger};
  font-size: 0.75rem;
  padding: 0.5rem;
`;
