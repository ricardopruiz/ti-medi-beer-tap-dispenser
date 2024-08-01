import { useTranslation } from "react-i18next";
import { Dispenser } from "../../types/dispenser.types";
import { DispensersTable, DispenserTableWrapper } from "./DispenserList.styled";
import EyeIcon from "../Icons/EyeIcon";
import Button from "../Button";

type DispenserListProps = {
  adminMode?: boolean;
  dispensers: Dispenser[];
  handleDispenserDetail?(dispenserID: string): void;
};

const DispenserList = ({
  adminMode = false,
  dispensers,
  handleDispenserDetail = () => {},
}: DispenserListProps) => {
  const { t, i18n } = useTranslation();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString(i18n.language, {
      year: "2-digit",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <DispenserTableWrapper>
      <DispensersTable>
        <thead>
          <tr>
            <th>UUID</th>
            <th>{t("dispensers.status")}</th>
            <th>{t("dispensers.last-activity")}</th>
            {adminMode && <th>{t("dispensers.actions")}</th>}
          </tr>
        </thead>
        <tbody>
          {dispensers.map((dispenser) => (
            <tr key={dispenser.id}>
              <td>{dispenser.id}</td>
              <td>{t(`dispensers.status-${dispenser.status}`)}</td>
              <td>{formatDate(dispenser.updated_at)}</td>
              {adminMode && (
                <td>
                  <Button onClick={() => handleDispenserDetail(dispenser.id)}>
                    <EyeIcon />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </DispensersTable>
    </DispenserTableWrapper>
  );
};

export default DispenserList;
