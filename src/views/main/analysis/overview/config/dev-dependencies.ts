import type { IDescriptionProp } from "@/base-ui/descriptions"
export const devDependencies: IDescriptionProp[] = [
  {
    name: "typescript",
    description: "~4.5.5"
  },
  {
    name: "less",
    description: "^4.0.0"
  },
  {
    name: "less-loader",
    description: "^8.0.0"
  },
  {
    name: "webpack",
    description: "5"
  },
  // 代码格式检测
  {
    name: "eslint",
    description: "^7.32.0"
  },
  {
    name: "eslint-config-prettier",
    description: "^8.3.0"
  },
  {
    name: "eslint-plugin-prettier",
    description: "^4.0.0"
  },
  {
    name: "eslint-plugin-vue",
    description: "^8.0.3"
  },
  // 代码格式化工具
  {
    name: "prettier",
    description: "^2.6.0"
  },
  // git hook
  {
    name: "husky",
    description: "^7.0.0"
  },
  // git commit message lint
  {
    name: "@commitlint/cli",
    description: "^16.2.3"
  },
  {
    name: "@commitlint/config-conventional",
    description: "^16.2.1"
  },
  // git commit 工具
  {
    name: "commitizen",
    description: "^4.2.4"
  },
  {
    name: "cz-conventional-changelog",
    description: "^3.3.0"
  },
  // ts eslint插件
  {
    name: "@typescript-eslint/eslint-plugin",
    description: "^5.4.0"
  },
  {
    name: "@typescript-eslint/parser",
    description: "^5.4.0"
  },
  // vue cli 插件
  {
    name: "@vue/cli-plugin-babel",
    description: "~5.0.0"
  },
  {
    name: "@vue/cli-plugin-eslint",
    description: "~5.0.0"
  },
  {
    name: "@vue/cli-plugin-typescript",
    description: "~5.0.0"
  },
  {
    name: "@vue/cli-service",
    description: "~5.0.0"
  },
  {
    name: "@vue/eslint-config-typescript",
    description: "^9.1.0"
  },
  // element-plus自动导入
  // el-image和el-table结合使用时，使用大图预览功能需要添加preview-telepord
  // 以服务的方式调用时不会引入对应的css 需要手动引入
  {
    name: "unplugin-auto-import",
    description: "^0.6.6"
  },
  {
    name: "unplugin-vue-components",
    description: "^0.18.3"
  }
]
