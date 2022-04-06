import { ILoginState } from "./login/type"
import { IDashboardState } from "./main/analysis/type"
import { ISystemState } from "./main/system/type"

export interface IRootState {
  [key: string | symbol]: any[]
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
  entireCategory: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreState = IRootState & IRootWithModule
