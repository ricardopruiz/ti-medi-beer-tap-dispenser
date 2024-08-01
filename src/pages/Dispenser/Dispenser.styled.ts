import styled from "styled-components";

export const DispenserContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  user-select: none;

  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const StyledDispenser = styled.div``;
