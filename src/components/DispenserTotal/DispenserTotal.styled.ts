import styled from "styled-components";

export const DispenserAnotation = styled.div``;

export const DispenserAnotationLabel = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: bold;
`;

export const DispenserAnotationData = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.default};
  font-weight: bold;
`;
