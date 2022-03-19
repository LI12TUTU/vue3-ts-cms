const path = require("path")
const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       compents: "@/components"
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/componts"
  //   }
  // }
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
  }
})
