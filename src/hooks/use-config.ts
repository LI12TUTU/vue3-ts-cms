import { computed } from "vue"
import { IForm } from "@/base-ui/form"
import { useStore } from "@/store"

export function useConfig(
  fields: string[],
  storeState: string[],
  config: IForm
) {
  return computed(() => {
    const store = useStore()
    fields.forEach((field, index) => {
      const formItem = config.formItems.find((item) => item.field === field)
      formItem!.selectOptions = store.state[storeState[index]].map((item) => ({
        label: item.name,
        value: item.id
      }))
    })

    return config
  })
}
