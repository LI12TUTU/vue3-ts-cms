import type { App } from "vue"
import { User, Cellphone } from "@element-plus/icons-vue"

const icons = [User, Cellphone]

export default function (app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
