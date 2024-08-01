import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.text.contrast};

  display: flex;

  align-items: center;
  justify-content: center;
`;
