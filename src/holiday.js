import dayjs from "./core";

/** 休日 */
export const isHoliday = (strYYYYMMDD) => {
  const res = dayjs(strYYYYMMDD);
  if (!res.isValid) {
    console.error("Invalid");
    return false;
  }
  return res.day() === 0 || res.day() === 6;
};

/** 法定休日 */
export const isLegalHoliday = (strYYYYMMDD) => {
  const res = dayjs(strYYYYMMDD);
  if (!res.isValid) {
    console.error("Invalid");
    return false;
  }
  return res.day() === 0;
};
