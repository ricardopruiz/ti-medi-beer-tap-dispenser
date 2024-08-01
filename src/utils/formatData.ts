import dayjs from "dayjs";

export const formatDate = (date: Date) => {
  return dayjs(date).format("DD MMM hh:mm:ss");
};

export const formatNumberWithDecimals = (
  number: number,
  decimals = 2,
  language: string
) => {
  return number.toLocaleString(language, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
};

export const formatCurrency = (money: number, locale: string) => {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(money);
};
