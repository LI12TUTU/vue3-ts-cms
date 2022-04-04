type IFormType = "input" | "password" | "select" | "datapicker"

interface optionsType {
  label: string
  value: any
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
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
  showFormPadding?: boolean
}

export interface IModelValue {
  [key: string | symbol]: string
}
