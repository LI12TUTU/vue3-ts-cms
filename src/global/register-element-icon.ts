import type { App } from "vue"
import * as Elicons from "@element-plus/icons-vue"
import isValidKey from "@/utils/typeofKey"

export default function (app: App): void {
  for (const key in Elicons) {
    if (isValidKey(key, Elicons)) {
      const icon: any = Elicons[key]
      app.component(icon.name, icon)
    }
  }
}
