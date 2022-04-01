export interface ISystemStateKey {
  [key: string]: any
}

export interface ISystemState extends ISystemStateKey {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
}

export interface IGetPageListPayload {
  pageName: string
  queryInfo: any
}

export interface IPageType {
  pageUrl: string
  mutationTypes: string[]
}

export interface IPageUrlMap {
  [key: string]: IPageType
}
