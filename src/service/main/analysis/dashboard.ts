import { ryRequest, ryRequestShowLoading } from "@/service"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale",
  goodsAmountList = "/goods/amount/list"
}

export function getCategoryGoodsCount() {
  return ryRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return ryRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return ryRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return ryRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getGoodsAmountList() {
  return ryRequestShowLoading.get({
    url: DashboardAPI.goodsAmountList
  })
}
