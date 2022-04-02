import { ryRequestShowLoading } from "@/service"

export function getPageListData(url: string, queryInfo: any) {
  return ryRequestShowLoading.post({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return ryRequestShowLoading.delete({
    url
  })
}
