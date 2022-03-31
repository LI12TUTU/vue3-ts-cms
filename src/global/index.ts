import { App } from "vue"
import registerElementIcon from "./register-element-icon"
import { registerProperties } from "./register-properties"

export function globalRegister(app: App): void {
  registerElementIcon(app)
  registerProperties(app)
}
