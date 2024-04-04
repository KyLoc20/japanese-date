import dayjs, { TIME_ZONE } from "./core";

export const getTokyoTime = ({ strHHmm, strYYYYMMDD }) => {
  const tokyoTime = dayjs.tz(
    `${strYYYYMMDD} ${strHHmm}`,
    "Asia/Tokyo"
  );
  return tokyoTime.format();
};
