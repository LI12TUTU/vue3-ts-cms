import { App } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

export function regisetrComponents(app: App) {
  // app.component(ElMessage.name, ElMessage)
  app.component("PageContent", PageContent)
  app.component("PageSearch", PageSearch)
  app.component("PageModal", PageModal)
}
