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

export function createPageData(url: string, newData: any) {
  return ryRequestShowLoading.post({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return ryRequestShowLoading.patch({
    url: url,
    data: editData
  })
}
