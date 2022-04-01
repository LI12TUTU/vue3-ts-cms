import type { App } from "vue"
import * as Elicons from "@element-plus/icons-vue"

export default function (app: App): void {
  for (const key in Elicons) {
    const icon: any = (Elicons as any)[key]
    app.component(icon.name, icon)
  }
}
