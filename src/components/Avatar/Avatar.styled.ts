import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 8rem;
  color: white;

  display: flex;

  align-items: center;
  justify-content: center;
`;
