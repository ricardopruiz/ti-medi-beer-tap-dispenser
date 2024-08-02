import Table from ".";

import { render, screen } from "../../utils/testUtils";

import "@testing-library/jest-dom";
import { TableColumnData, TableRowData } from "./Table.types";
import { faker } from "@faker-js/faker";

const buildColumns = (amount: number): TableColumnData[] =>
  new Array(amount).fill(null).map(() => ({
    key: faker.lorem.word(),
    label: faker.lorem.words(),
  }));

const buildRows = (
  amount: number,
  columns: TableColumnData[]
): TableRowData[] =>
  new Array(amount).fill(null).map(() => {
    return columns.map(({ key }) => ({
      key,
      value: faker.lorem.words(),
    }));
  });

describe("table", () => {
  it("renders all given headers", () => {
    const headers = buildColumns(10);
    render(<Table columns={headers} rows={[]} />);

    headers.forEach((header) => {
      const renderedHeader = screen.getByText(header.label);

      expect(renderedHeader).toBeInTheDocument();
    });
  });

  it("renders all given rows", () => {
    const headers = buildColumns(2);
    const rows = buildRows(10, headers);

    render(<Table columns={headers} rows={rows} />);

    const table = screen.getByRole("table");
    const renderedRows = table.querySelectorAll("tbody tr");

    expect(renderedRows.length).toBe(rows.length);
  });

  it("renders all the content for each row", () => {
    const headers = buildColumns(2);
    const rows = buildRows(10, headers);

    render(<Table columns={headers} rows={rows} />);

    rows.forEach((row) => {
      row.forEach((cell) => {
        const renderedCell = screen.getByText(String(cell.value));

        expect(renderedCell).toBeInTheDocument();
      });
    });
  });
});
