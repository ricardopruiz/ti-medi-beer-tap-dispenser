import styled from "styled-components";

export const DispenserTableWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

export const DispensersTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary.light};

    th {
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.text.contrast};
      font-weight: bold;
    }
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background.accent};

    &:nth-child(2n) {
      background-color: ${({ theme }) => theme.colors.background.accent}33;
    }

    td {
      padding: 0.5rem;
      white-space: nowrap;
      &:first-child {
        width: 100%;
      }

      &:not(:first-child) {
        width: fit-content;
        padding-left: 1rem;
      }

      &:last-child {
        display: flex;
        width: auto;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }
`;
