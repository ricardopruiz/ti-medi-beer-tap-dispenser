import dayjs from "dayjs";

export const formatDate = (date: Date) => {
  return dayjs(date).format("DD MMM hh:mm:ss");
};

/**
 *  This function transform a provided number into a string formmatted
 *  with two decimals and has in mind the localization (',' or '.' depending the selected language)
 */
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

/**
 * Formats the price of something (3,00€ or €3.00)
 */
export const formatCurrency = (money: number, locale: string) => {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(money);
};
