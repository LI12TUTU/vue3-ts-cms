export interface ISystemStateKey {
  [key: string]: any
}

export interface ISystemState extends ISystemStateKey {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
  goodList: any[]
  goodCount: number
  menuList: any[]
  menuCount: number
}

export interface IGetPageListPayload {
  pageName: string
  queryInfo: any
}

export interface IDeletePayload {
  pageName: string
  id: number
}

export interface IPageType {
  deleteUrl: string
  pageUrl: string
  mutationTypes: string[]
}

export interface IPageUrlMap {
  [key: string]: IPageType
}
