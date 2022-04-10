export const projectDir = `
│  .browserslistrc
│  .editorconfig
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  auto-imports.d.ts
│  babel.config.js
│  cms.txt
│  commitlint.config.js
│  components.d.ts
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  assets.d.ts
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │      mixin.less
    │  │      var.less
    │  │
    │  └─img
    │          avatar.jpg
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          card.vue
    │  │
    │  ├─code
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          code.vue
    │  │
    │  ├─count-up
    │  │  │  index.ts
    │  │  │
    │  │  ├─hooks
    │  │  │      use-count-up.ts
    │  │  │
    │  │  └─src
    │  │          count-up.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─echart
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  ├─hooks
    │  │  │      use-echart.ts
    │  │  │
    │  │  └─src
    │  │          echart.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      form.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─table
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      table.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  └─text-link
    │      │  index.ts
    │      │
    │      ├─src
    │      │      text-link.vue
    │      │
    │      └─types
    │              index.ts
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  ├─hooks
    │  │  │      use-screen.ts
    │  │  │
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-menu.vue
    │  │
    │  ├─page-content
    │  │  │  index.ts
    │  │  │
    │  │  ├─hooks
    │  │  │      use-export.ts
    │  │  │      use-page-data.ts
    │  │  │      use-selection.ts
    │  │  │
    │  │  └─src
    │  │          page-content.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │
    │  │  ├─types
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      page-modal.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─page-search
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-search.vue
    │  │
    │  └─statistical-panel
    │      │  index.ts
    │      │
    │      ├─src
    │      │      statistical-panel.vue
    │      │
    │      └─types
    │              index.ts
    │
    ├─constants
    │      aside-menu-color.ts
    │      index.ts
    │      storage-key.ts
    │
    ├─global
    │      index.ts
    │      register-components.ts
    │      register-element-icon.ts
    │      register-properties.ts
    │
    ├─hooks
    │      use-config.ts
    │      use-page-modal.ts
    │      use-page-search.ts
    │      use-permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          config.ts
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  root-mutation-type.ts
    │  │  type.ts
    │  │
    │  ├─login
    │  │      login-mutation-type.ts
    │  │      login.ts
    │  │      type.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │      dashboard-mutation-type.ts
    │      │      dashboard.ts
    │      │      type.ts
    │      │
    │      └─system
    │              system-mutation-type.ts
    │              system.ts
    │              type.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      debounce.ts
    │      map-menus.ts
    │      typeofKey.ts
    │      xlsx.ts
    │
    └─views
        ├─login
        │  │  login.vue
        │  │
        │  ├─config
        │  │      account-config.ts
        │  │      modal-config.ts
        │  │      phone-config.ts
        │  │
        │  ├─cpns
        │  │      login-account.vue
        │  │      login-panel.vue
        │  │      login-phone.vue
        │  │
        │  └─css
        │          form-item.less
        │
        ├─main
        │  │  main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content-config.ts
        │  │  │          modal-config.ts
        │  │  │          search-config.ts
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      ├─config
        │  │      │      content-config.ts
        │  │      │      modal-config.ts
        │  │      │      search-config.ts
        │  │      │
        │  │      └─hooks
        │  │              use-category.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │          list.vue
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          content-config.ts
        │      │          modal-config.ts
        │      │          search-config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─config
        │      │          content-config.ts
        │      │          modal-config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          content-config.ts
        │      │          modal-config.ts
        │      │          search-config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─config
        │                  content-config.ts
        │                  modal-config.ts
        │                  search-config.ts
        │
        └─not-found
                not-found.vue
`
