import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/formatData";
import { DispenserDetails } from "../../types/dispenser.types";
import dayjs from "dayjs";
import DispenserTotal from "../DispenserTotal";
import { DispenserTotals } from "./DispenserDataVisualizer.styled";
import DispenserHistory from "../DispenserHistory";

type DispenserDataVisualizerProps = {
  data: DispenserDetails;
};

const DispenserDataVisualizer = ({ data }: DispenserDataVisualizerProps) => {
  const { t, i18n } = useTranslation();

  const totalTimeUsed = () => {
    const timeUsedPerService = data?.usages
      .filter(({ closed_at, opened_at }) => closed_at && opened_at)
      .map((service) =>
        dayjs(service.closed_at).diff(service.opened_at, "seconds")
      );

    const totalTime = timeUsedPerService?.reduce(
      (total, timePerService) => total + timePerService,
      0
    );

    return dayjs
      .utc(dayjs.duration({ seconds: totalTime }).asMilliseconds())
      .format("HH:mm:ss");
  };

  return (
    <>
      <DispenserTotals>
        <DispenserTotal
          label={t("dispenser-detail.amount")}
          amount={formatCurrency(data!.amount, i18n.language)}
        />
        <DispenserTotal
          label={t("dispenser-detail.total-uses")}
          amount={String(data!.usages.length)}
        />
        <DispenserTotal
          label={t("dispenser-detail.total-time")}
          amount={totalTimeUsed()}
        />
      </DispenserTotals>
      <DispenserHistory dispenserHistory={data!.usages} />
    </>
  );
};

export default DispenserDataVisualizer;
