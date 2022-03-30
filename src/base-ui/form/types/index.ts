type IFormType = "input" | "password" | "select" | "datapicker"

interface optionsType {
  title: string
  value: string
}

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  selectOptions?: optionsType[]
  formItemOptions?: any
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
