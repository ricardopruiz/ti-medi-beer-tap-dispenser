import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius.roundLight};
  border: 1px solid ${({ theme }) => theme.colors.text.default};

  height: 2rem;
  padding: 0.25rem 1rem;
`;

export default StyledInput;
