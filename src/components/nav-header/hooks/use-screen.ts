import { debounce } from "@/utils/debounce"
import { ref } from "vue"

export const isFold = ref(false)

export function useScreen(emit: any) {
  function changeMenu() {
    if (window.innerWidth < 768) {
      isFold.value = true
      emit("foldChange", isFold.value)
    } else {
      isFold.value = false
      emit("foldChange", isFold.value)
    }
  }

  const debounceChangeMenu = debounce(changeMenu, 200)

  window.addEventListener("resize", debounceChangeMenu)
}
