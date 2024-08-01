import { useTranslation } from "react-i18next";
import { Dispenser } from "../../types/dispenser.types";
import EyeIcon from "../Icons/EyeIcon";
import Button from "../Button";
import { TableColumnData, TableRowData } from "../Table/Table.types";
import { formatDate } from "../../utils/formatData";
import Table from "../Table";

type DispenserListProps = {
  dispensers: Dispenser[];
  handleDispenserDetail?(dispenserID: string): void;
};

const DispenserList = ({
  dispensers,
  handleDispenserDetail = () => {},
}: DispenserListProps) => {
  const { t } = useTranslation();

  const columns: TableColumnData[] = [
    { key: "uuid", label: "UUID", align: "left" },
    { key: "status", label: t("dispensers.status"), align: "right" },
    {
      key: "lastActivity",
      label: t("dispensers.last-activity"),
      align: "right",
    },
    { key: "actions", label: t("dispensers.actions"), align: "center" },
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
        value: formatDate(dispenser.updated_at),
      },
      {
        key: "actions",
        value: (
          <Button onClick={() => handleDispenserDetail(dispenser.id)}>
            <EyeIcon />
          </Button>
        ),
      },
    ];
  });

  return <Table columns={columns} rows={dispensersList} />;
};

export default DispenserList;
