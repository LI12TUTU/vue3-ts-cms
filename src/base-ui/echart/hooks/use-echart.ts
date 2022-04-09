import * as echarts from "echarts"

import chinaMap from "../data/china.json"

echarts.registerMap("china", chinaMap)
/**
 *  useEchart(el)
 *  注册了中国地图图表，添加图表自适应
 * @param {HTMLElement} el 显示图表的元素
 * @returns {
 *  echartInstance init返回的echarts实例
 *  setOption {function} 通过setOption设置echarts配置
 *  updateSize {function} 调用updateSize调整图表大小
 * }
 */

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
