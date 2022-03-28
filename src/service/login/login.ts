import { ryRequest, ryRequestShowLoading } from "../index"
import type { IAccount, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return ryRequest.post<ILoginResult>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return ryRequest.get({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return ryRequestShowLoading.get({
    url: LoginAPI.UserMenus + id + "/menu"
  })
}
