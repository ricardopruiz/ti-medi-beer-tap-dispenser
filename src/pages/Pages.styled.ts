import styled from "styled-components";

export const PageLayout = styled.main`
  display: grid;
  grid-template-rows: min-content auto;
  height: 100%;
`;

export const PageTitle = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary.light};

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 2.5rem;
    text-align: unset;
  }
`;

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;

  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 3rem;
  }
`;
