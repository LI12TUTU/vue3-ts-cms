# vue3-ts-cms

## 安装相关依赖

```
npm install
```

### 运行项目

```
npm run serve
```

### 打包构建代码

```
npm run build
```

### 代码格式检测

```
npm run lint
```

### 代码格式化

```
npm run prettier
```

### 提交代码

```
npm run commit
```

### basi-ui

#### breadcrumb(面包屑组件)

props：

| breadumbs: IBreadcrumb[]           | 面包屑路径   | default: []                                            |
| ---------------------------------- | ------------ | ------------------------------------------------------ |
| separatorOptions: ISeparatorOption | 面包屑分割符 | default：{ separator: "", separatorIcon: "ArrowRight"} |

```typescript
types
interface IBreadcrumb {
  name: string // 面包屑路径
  path?: string // 面包屑跳转路由
}

interface ISeparatorOption {
  separator?: string // 面包屑分隔符
  separatorIcon?: string // 面包屑分割图标
}
```

#### card(卡片组件)

props

| title: string | 卡片标题 | default： “” |
| ------------- | -------- | ------------ |
|               |          |              |

slots

| slotName：default | 卡片内容 | default： “” |
| ----------------- | -------- | ------------ |
|                   |          |              |

#### code(高亮组件)

[highlight.js](https://highlightjs.org/)

props

| language： String | 渲染的语言 | default： “html” |
| ----------------- | ---------- | ---------------- |
| code: String      | 渲染的内容 | default： “”     |

#### count-up(数字递增动画组件)

[countUp.js](https://github.com/inorganik/countUp.js)

props

| number： number          | 递增的数字 | default： 0             |
| ------------------------ | ---------- | ----------------------- |
| options： CountUpOptions | 配置选项   | default： defautOptions |

```typescript
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
}
```

hooks

```

/**
 *
 * useCountup(counter, number, options)
 * @param {Ref<HTMLElement | undefined>} counter 显示递增动画的容器
 * @param {number} number 递增的数字
 * @param {CountUpOptions} options 递增选项
 * @returns {
 *  createCounter {Function} 创建一个countup实例，开启数字递增动画
 *  update {Function} 数字发生变化，调用update执行动画
 * }
 */

```

#### descriptions（描述列表组件）

[el-descriptions](https://element-plus.gitee.io/zh-CN/component/descriptions.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

| title: string               | 描述列表的标题           | default：“” |
| --------------------------- | ------------------------ | ----------- |
| column: number              | 列表一行显示几列描述item | default：1  |
| tableData：IDescriptionProp | 列表的描述item数据       | default：[] |

types

```typescript
interface IDescriptionProp {
  name: string // 描述item的label值
  description: string // 描述item的内容
}

```

#### echart(echarts图表组件)

[echarts](https://echarts.apache.org/zh/index.html)

props

| options：EchartsOption | echarts配置选项，参看echarts配置 | 没有默认值       |
| ---------------------- | -------------------------------- | ---------------- |
| width：string          | 图表容器宽度                     | default：“100%”  |
| height：string         | 图表容器高度                     | default：“360px” |

hooks

```
/**
 *  useEchart(el)
 *  注册了中国地图图表，添加图表自适应的功能
 * @param {HTMLElement} el 显示图表的元素
 * @returns {
 *  echartInstance init返回的echarts实例
 *  setOption {function} 通过setOption设置echarts配置
 *  updateSize {function} 调用updateSize调整图表大小
 * }
 */
```

#### form（表单组件）

[el-form](https://element-plus.gitee.io/zh-CN/component/form.html)

[el-col](https://element-plus.gitee.io/zh-CN/component/layout.html)

[el-input](https://element-plus.gitee.io/zh-CN/component/input.html)

[el-select](https://element-plus.gitee.io/zh-CN/component/select.html)

[el-datapicker](https://element-plus.gitee.io/zh-CN/component/date-picker.html)

**v-model 表单元素双向绑定的值对象，key需要与formItems的field值一致**

props

| formOptions：ElFormOptions | ElForm的配置选项               | default：{}                                             |
| -------------------------- | ------------------------------ | ------------------------------------------------------- |
| formItems：IFormItem[]     | 表单元素配置选项               | default：[]                                             |
| labelWidth:  string        | 表单元素的label宽度            | default：“100px”                                        |
| itemStyle: object          | 表单item的样式                 | default：{ padding: "10px 20px" }                       |
| colLayout: object          | 表单元素的布局，参考el-col配置 | default：{ xl： 6， lg： 8， md： 12，sm:  24, xs: 24 } |
| showFormPadding: boolean   | 是否显示form的默认padding      | default：true                                           |

types

```typescript
type IFormType = "input" | "password" | "select" | "datapicker"

interface ISelectOptions {
  label: string // select元素options的内容
  value: any // select元素options的value值
}

interface IFormItem {
  field: string // 表单字段，与v-model的对象key一致
  type: IFormType // 表单元素类型，支持4种选择
  label: string // 表单元素的label值
  rules?: any[] 、// 表单元素的校验规则
  placeholder?: string // 表单元素的默认占位内容
  selectOptions?: ISelectOptions[] // type为select的配置选项
  formItemOptions?: any // 表单item的配置选项，参考el-form-item
  otherOptions?: any // 表单元素的其他配置，参考el-input, el-select, el-datapicker
  isHidden?: boolean // 是否隐藏表单元素
}
```

methods

| validAction | 拿到表单验证结果 | 返回值：promise，promise的结果为表单验证结果，当表单无输入内容时抛出异常 |
| ----------- | ---------------- | ------------------------------------------------------------ |
|             |                  |                                                              |

slots

| slotName：header | 表头内容 | 没有默认值 |
| ---------------- | -------- | ---------- |
| slotName：footer | 表尾内容 | 没有默认值 |

#### table（表格组件）

[el-table](https://element-plus.gitee.io/zh-CN/component/table.html)

```typescript
v-model:page=“{ 
  							currentPage: 1 // 当前页
               	pageSize: 10 // 页面数据总数 
              }” 
表尾分页器的分页信息 
```

props

| title： string            | 表头标题                                                     | default：“”              |
| ------------------------- | ------------------------------------------------------------ | :----------------------- |
| listData： any[]          | 表格数据                                                     | 必传属性                 |
| listCount： number        | 数据总数，用于表尾分页器                                     | default： 0              |
| propList：any[]           | 表格列的配置选项，参考el-table-column配置,除了el-table-column配置选项外，可以额外传递一个slotName属性用以决定当前列的插槽名，自定义表格列内容的显示 | default：[]              |
| showColumIndex：boolean   | 是否显示序号列                                               | default： false          |
| showSelectColumn：boolean | 是否显示选择框列                                             | default：false           |
| tableOptions：any         | 表格配置选项，参考el-table配置                               | default：{ border：true} |
| showFooter：boolean       | 是否显示表尾分页器                                           | default：true            |

emits

| emitName: selectionChange | 点击表格选择框选择数据触发的事件 | 参数：选择的表格行数据 |
| ------------------------- | -------------------------------- | ---------------------- |
|                           |                                  |                        |

slots

| slotName：header        | 表头插槽，自定义表头插槽内容         | 默认值：显示标题和按钮             |
| ----------------------- | ------------------------------------ | ---------------------------------- |
| slotName：headerHandler | 表头内的按钮插槽                     | 没有默认值                         |
| slotName：footer        | 表尾插槽，自定义表尾内容             | 默认值：分页器                     |
| 动态插槽                | propList传递的插槽，自定义表格列内容 | 默认值：显示当前表格数据对应列的值 |

组件实例属性

| tableEl | el-table的根节点，用以excel导出 |
| ------- | ------------------------------- |
|         |                                 |

