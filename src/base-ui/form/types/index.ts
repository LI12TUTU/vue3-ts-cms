type IFormType = "input" | "password" | "select" | "datapicker"

interface optionsType {
  title: string
  value: string
}

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: optionsType[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
