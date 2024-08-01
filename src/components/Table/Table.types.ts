import { ReactNode } from "react";

export type TableColumnData = {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
};

export type TableCellData = {
  key: string;
  value: ReactNode;
};

export type TableRowData = TableCellData[];
