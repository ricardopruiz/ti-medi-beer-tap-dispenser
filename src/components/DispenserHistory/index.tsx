import { useTranslation } from "react-i18next";
import { DispenserDetails } from "../../types/dispenser.types";
import dayjs from "dayjs";
import {
  formatCurrency,
  formatDate,
  formatNumberWithDecimals,
} from "../../utils/formatData";
import { TableColumnData, TableRowData } from "../Table/Table.types";
import Table from "../Table";

type DispenserHistoryProps = {
  dispenserHistory: DispenserDetails["usages"];
};

const DispenserHistory = ({ dispenserHistory }: DispenserHistoryProps) => {
  const { t, i18n } = useTranslation();
  const getSecondsOpened = (openedTime: Date, closedTime: Date) => {
    return dayjs(closedTime).diff(openedTime, "milliseconds") / 1000;
  };

  const getTimeOpened = (openedTime: Date, closedTime: Date) => {
    if (closedTime) {
      const secondsOpened = getSecondsOpened(openedTime, closedTime);
      return formatNumberWithDecimals(secondsOpened, 2, i18n.language);
    }
    return "-";
  };

  const columns: TableColumnData[] = [
    {
      key: "operatingTime",
      label: t("dispenser-detail.operating-time"),
      align: "left",
    },
    {
      key: "timeOpened",
      label: t("dispenser-detail.time-opened"),
      align: "right",
    },
    {
      key: "flowVolume",
      label: t("dispenser-detail.flow-volume"),
      align: "right",
    },
    {
      key: "litersServed",
      label: t("dispenser-detail.liters-served"),
      align: "right",
    },
    {
      key: "totalSpent",
      label: t("dispenser-detail.total-spent"),
      align: "right",
    },
  ];

  const dispenserData: TableRowData[] = dispenserHistory.map((detail) => {
    const operatingTime = `${formatDate(detail.opened_at)} - ${formatDate(
      detail.closed_at
    )}`;
    const timeOpened = getTimeOpened(detail.opened_at, detail.closed_at);
    const litersServed = formatNumberWithDecimals(
      getSecondsOpened(detail.opened_at, detail.closed_at) * detail.flow_volume,
      2,
      i18n.language
    );

    return [
      {
        key: "operatingTime",
        value: operatingTime,
      },
      {
        key: "timeOpened",
        value: `${timeOpened} s`,
      },
      {
        key: "flowVolume",
        value: `${formatNumberWithDecimals(
          detail.flow_volume,
          3,
          i18n.language
        )} l/s`,
      },
      {
        key: "litersServed",
        value: `${litersServed} l`,
      },
      {
        key: "totalSpent",
        value: formatCurrency(detail.total_spent, i18n.language),
      },
    ];
  });

  return <Table columns={columns} rows={dispenserData} />;
};

export default DispenserHistory;
