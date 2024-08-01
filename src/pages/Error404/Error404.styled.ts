import styled from "styled-components";

export const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 6rem;
  font-weight: bolder;

  width: 100%;
  height: 100%;
`;
