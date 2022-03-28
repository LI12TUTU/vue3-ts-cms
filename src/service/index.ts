import RyRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const ryRequest = new RyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: false
})

const ryRequestShowLoading = new RyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export { ryRequest, ryRequestShowLoading }
