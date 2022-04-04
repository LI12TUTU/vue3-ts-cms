import { ILoginState } from "./login/type"
import { ISystemState } from "./main/system/type"

export interface IRootState {
  [key: string | symbol]: any[]
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreState = IRootState & IRootWithModule
