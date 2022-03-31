// const path = require("path")
const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "~@/assets/css/var.less";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        compents: "@/components"
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/componts"
  //   }
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components")
  // }
})
