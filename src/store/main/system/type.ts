import { IQueryInfo } from "@/service/main/system/type"

export interface ISystemState {
  userList: any[]
  userCount: number
}

export interface IGetPageListPayload {
  pageUrl: string
  queryInfo: IQueryInfo
}
