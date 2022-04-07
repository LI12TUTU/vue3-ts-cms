export interface IAccount {
  name: string
  password: string
}

export interface IDataType {
  code: number
  data: any
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export type ILoginRequestRes = ILoginResult | IDataType
