import { App } from "vue"
import registerElementIcon from "./register-element-icon"
import { registerProperties } from "./register-properties"
import { regisetrComponents } from "./register-components"

export function globalRegister(app: App): void {
  registerElementIcon(app)
  registerProperties(app)
  regisetrComponents(app)
}
