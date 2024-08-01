import styled from "styled-components";

export const PageLayout = styled.main`
  display: grid;
  grid-template-rows: min-content auto;
  height: 100%;
`;

export const DispensersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;

  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 3rem;
  }
`;

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

export const DispenserAdminSectionTitle = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary.light};

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 2.5rem;
    text-align: unset;
  }
`;
