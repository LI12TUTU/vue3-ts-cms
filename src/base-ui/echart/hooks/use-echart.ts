import * as echarts from "echarts"

import chinaMap from "../data/china.json"

echarts.registerMap("china", chinaMap)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOption = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOption,
    updateSize
  }
}
