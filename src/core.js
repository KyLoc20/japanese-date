import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export const TIME_ZONE = "Asia/Tokyo";

dayjs.tz.setDefault(TIME_ZONE);

export default dayjs;
