import { useTranslation } from "react-i18next";
import { Dispenser } from "../../types/dispenser.types";
import { TableColumnData, TableRowData } from "../Table/Table.types";
import Table from "../Table";
import LastActivity from "./LastActivity";

type PublicDispenserListProps = {
  dispensers: Dispenser[];
};

const PublicDispenserList = ({ dispensers }: PublicDispenserListProps) => {
  const { t } = useTranslation();

  const columns: TableColumnData[] = [
    { key: "uuid", label: "UUID", align: "left" },
    { key: "status", label: t("dispensers.status"), align: "right" },
    {
      key: "lastActivity",
      label: t("dispensers.last-activity"),
      align: "right",
    },
  ];

  const dispensersList: TableRowData[] = dispensers.map((dispenser) => {
    return [
      {
        key: "uuid",
        value: dispenser.id,
      },
      {
        key: "status",
        value: t(`dispensers.status-${dispenser.status}`),
      },
      {
        key: "lastActivity",
        value: <LastActivity lastUpdate={dispenser.updated_at} />,
      },
    ];
  });

  return <Table columns={columns} rows={dispensersList} />;
};

export default PublicDispenserList;
