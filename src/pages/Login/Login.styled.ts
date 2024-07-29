import styled from "styled-components";

export const StyledLoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const StyledVerticalBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 66%;
  }
`;

export const StyledForm = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 3rem;

  width: 100%;
`;

export const StyledFormButtonContainer = styled.div`
  display: grid;

  width: 100%;
`;

export const StyledFormInputContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;