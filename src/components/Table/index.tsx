import { StyledTable, StyledTableWrapper } from "./Table.styled";
import { TableColumnData, TableRowData } from "./Table.types";
import { mapDataToKeys } from "../../utils/dataMapping";

type TableProps = {
  columns: TableColumnData[];
  rows: TableRowData[];
};

const Table = ({ columns, rows }: TableProps) => {
  const columnsData = mapDataToKeys(columns);
  const rowsData = rows.map(mapDataToKeys);
  const keys = Object.keys(columnsData);

  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={`th-${key}`} align={columnsData[key].align}>
                {columnsData[key].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row, id) => (
            <tr key={id}>
              {keys.map((key, index) => (
                <td key={`row-${index}-${key}`} align={columnsData[key].align}>
                  {row[key].value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
