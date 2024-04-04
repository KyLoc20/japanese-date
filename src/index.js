import { isHoliday, isLegalHoliday } from "./holiday";
import { getTokyoTime } from "./utils";
export { isHoliday, isLegalHoliday, getTokyoTime };

console.log(
  getTokyoTime({
    strHHmm: "12:00",
    strYYYYMMDD: "2024-01-01",
  })
);
