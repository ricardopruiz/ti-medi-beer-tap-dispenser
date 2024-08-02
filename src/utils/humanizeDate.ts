import dayjs from "dayjs";

export const humanizeDate = (lastUpdate: Date) => {
  const minutesSinceLastUpdate = dayjs(lastUpdate).diff(
    dayjs(new Date()),
    "minute"
  );

  return dayjs.duration(minutesSinceLastUpdate, "minutes").humanize(true);
};
