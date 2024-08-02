import styled from "styled-components";

export const DispenserContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  user-select: none;

  gap: 3rem;

  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const DispenserText = styled.h1`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text.contrast};
  font-weight: bolder;
  font-size: 3rem;
  text-align: center;
  height: 9rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 4rem;
  }
`;

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;
