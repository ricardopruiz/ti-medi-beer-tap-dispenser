import dayjs from "dayjs";

/**
 * Transforms the last update of a dispenser on a
 * string easier to comprend, like "5 minutes ago"
 */
export const humanizeDate = (lastUpdate: Date) => {
  const minutesSinceLastUpdate = dayjs(lastUpdate).diff(
    dayjs(new Date()),
    "minute"
  );

  return dayjs.duration(minutesSinceLastUpdate, "minutes").humanize(true);
};
