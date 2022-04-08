export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   ├── index.less
│   │   │   └── mixin.less
│   │   │   └── var.less
│   │   └── img
│   │       └── avator.jpg
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── code.vue
│   │   ├── count-up
│   │   │   └── hooks
│   │   │       └── use-count-up.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── count-up.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── descriptions.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── use-echarts.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── table.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── text-link.vue
│   │   │   └── types
│   │   │       └── index.ts
│   ├── components
│   │   ├── nav-header
│   │   │   ├── hooks
│   │   │   │   └── use-screen.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── nav-header.vue
│   │   │       └── user-info.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── nav-menu.vue
│   │   ├── page-charts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-content
│   │   │   ├── hooks
│   │   │   │   └── use-page-data.ts
│   │   │   │   └── use-selection.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-modal.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-search.vue
│   │   └── statistical-panel
│   │       ├── index.ts
│   │       └── src
│   │           └── statistical-panel.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   ├── constants
│   │   ├── index.ts
│   │   ├── aside-menu-color.ts
│   │   └── storage-key.ts
│   ├── global
│   │   ├── index.ts
│   │   └── register-components.ts
│   │   ├── register-element-icon.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── use-config.ts
│   │   ├── use-page-modal.ts
│   │   ├── use-page-search.ts
│   │   └── use-permission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard
│   │   │   │   │   └── dashboard.ts
│   │   │   │   └── overview
│   │   │   │       └── overview.ts
│   │   │   ├── product
│   │   │   │   ├── category
│   │   │   │   │   └── category.ts
│   │   │   │   └── goods
│   │   │   │       └── goods.ts
│   │   │   └── system
│   │   │       ├── department
│   │   │       │   └── department.ts
│   │   │       ├── menu
│   │   │       │   └── menu.ts
│   │   │       ├── role
│   │   │       │   └── role.ts
│   │   │       └── user
│   │   │           └── user.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── analysis.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── index.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── type.ts
│   │   ├── root-mutation-type.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   |   └── login-mutation-type.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── type.ts
│   │   │   │   └── dashboard-mutation-type.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── type.ts
│   │   │   │   └── system-mutation-type.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-formt.ts
│   │   └── debounce.ts
│   │   └── map-menu.ts
│   └── views
│       ├── login
│       │   └── config
│       │       └── account-config.ts
│       │       └── phone-config.ts
│       │   ├── cpns
│       │   │   ├── login-account.vue
│       │   │   ├── login-panel.vue
│       │   │   └── login-phone.vue
│       │   └── css
│       │       └── form.item.less
│       │   ├── login.vue
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── index.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── overview.vue
│       │   ├── main.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── category.vue
│       │   │   │   └── config
│       │   │   │       ├── content-config.ts
│       │   │   │       └── search-config.ts
│       │   │   │       └── modal-config.ts
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── user.vue
│       └── not-found
│           └── not-found.vue
├── tsconfig.json
└── vue.config.js
`
