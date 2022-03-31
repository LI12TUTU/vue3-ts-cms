import { ryRequest } from "@/service"
import type { IQueryInfo } from "./type"

export function getPageListData(url: string, queryInfo: IQueryInfo) {
  return ryRequest.post({
    url: url,
    data: queryInfo
  })
}
