import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

const DATE_TIME_FORMATE = "YYYY-MM-DD HH:mm:ss"
const SYSTEM_TIME_FORMAT = "YYYY年MM月DD日 HH:mm:ss"

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMATE
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

export function formatTimestamp(
  timestamp: number,
  format: string = SYSTEM_TIME_FORMAT
) {
  return dayjs(timestamp).locale("zh-cn").format(format)
}

export function formatExportExcel(format: string = DATE_TIME_FORMATE) {
  return dayjs().format(format)
}
