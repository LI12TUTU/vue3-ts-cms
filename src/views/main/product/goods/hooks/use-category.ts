import { computed } from "vue"
import { useStore } from "@/store"
import { IForm } from "@/base-ui/form"

export function useCategory(config: IForm) {
  return computed(() => {
    const store = useStore()

    const categoryItem = config.formItems.find(
      (item) => item.field === "categoryId"
    )

    categoryItem!.selectOptions = store.state.entireCategory.map((item) => ({
      label: item.name,
      value: item.id
    }))

    return config
  })
}
