export interface ISystemStateKey {
  [key: string | symbol]: any
}

export interface IPageInfo {
  currentPage: number
  pageSize: number
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
  pageInfo: IPageInfo
  queryInfo: any
}

export interface IGetPageListPayload {
  pageName: string
  queryInfo: any
}

export interface IDeletePayload {
  pageName: string
  id: number
}

export interface ICreatePayload {
  pageName: string
  newData: any
}

export interface IEditPayload {
  pageName: string
  editData: any
  id: number
}

export interface IChangeDataPayload {
  pageName: string
  result: any
  changeName: string
}

export interface IPageType {
  baseUrl: string
  pageUrl: string
  mutationTypes: string[]
}

export interface IPageUrlMap {
  [key: string | symbol]: IPageType
}
