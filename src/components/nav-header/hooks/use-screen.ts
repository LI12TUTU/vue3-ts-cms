import { ref } from "vue"
import { debounce } from "@/utils/debounce"

export function useScreen(emit: any) {
  const isFold = ref(false)

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

  return isFold
}
