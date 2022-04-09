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

| breadumbs:  IBreadcrumb[]          | 面包屑路径   | default: []                                            |
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

#### code(高亮显示内容组件)

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
