import styled from "styled-components";

type DispenserButtonProps = {
  $isServing: boolean;
};

export const StyledDispenserButton = styled.button<DispenserButtonProps>`
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.background.default};
  width: 20rem;
  height: 20rem;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 13rem;

  transform: ${({ $isServing }) => ($isServing ? "scale(90%)" : "unset")};
  animation: ${({ $isServing }) =>
    $isServing ? "glow 1.5s infinite ease-in" : "unset"};

  transition: transform 250ms ease-in-out;
  cursor: pointer;

  @keyframes glow {
    0% {
      box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.background.default};
    }

    50% {
      box-shadow: 0 -10px 3rem 0.5rem ${({ theme }) => theme.colors.background.default};
    }

    100% {
      box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.background.default};
    }
  }
`;
