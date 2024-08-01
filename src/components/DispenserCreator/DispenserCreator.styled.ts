import styled from "styled-components";

export const DispenserCreatorWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
