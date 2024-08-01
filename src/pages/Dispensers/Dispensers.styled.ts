import styled from "styled-components";

export const DispensersAdminSection = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-rows: unset;
    grid-template-columns: 1fr auto;

    align-items: center;
  }
`;
