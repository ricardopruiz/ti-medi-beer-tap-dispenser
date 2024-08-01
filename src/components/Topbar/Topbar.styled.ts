import styled from "styled-components";

export const StyledTopbar = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr auto;
  gap: 1rem;

  padding: 1rem 1rem;

  align-items: center;
  justify-items: right;

  box-shadow: 0px 0px 37px -6px rgba(0, 0, 0, 0.75);
`;

export const Logo = styled.div`
  height: 2rem;
  width: 2rem;

  background: url("/favicon.png");
  background-size: cover;
`;
