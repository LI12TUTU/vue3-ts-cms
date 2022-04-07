import { ref, Ref } from "vue"
import { CountUp } from "countup.js"
import type { CountUpOptions } from "countup.js"

const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
}

export default function (
  counter: Ref<HTMLElement | undefined>,
  number: number,
  options: any
) {
  const instance = ref<CountUp>()

  const createCounter = () => {
    if (!counter.value) return
    const opts: CountUpOptions = Object.assign(defaultOptions, options)
    instance.value = new CountUp(counter.value, number, opts)
    start()
  }

  const start = () => {
    if (!instance.value) return
    instance.value.start()
  }

  const update = (number: number) => {
    if (!instance.value) return
    instance.value.update(number)
  }

  return {
    createCounter,
    update
  }
}
