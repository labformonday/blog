import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
import nav from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  lang: "zh-CN",
  title: "周一实验室 labformonday",
  description: "Stay foolish, Stay hungry.",

  lastUpdated: true,
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: {
      src: "/avatar.png",
      alt: "labformonday",
    },
    siteTitle: "周一实验室 labformonday",

    // 顶部导航栏菜单
    nav,

    // 侧边栏菜单: 左侧
    sidebar,

    // 侧边栏: 右侧自动生成
    aside: true,

    outline: {
      label: '目录',
      level: [1, 6],

    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://xdbaoku.com' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 周一实验室'
    },

    editLink: {
      pattern: 'https://www.xdbaoku.com/',
      text: 'Edit this page'
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 搜索功能
    search: {
      provider: 'local'
    },
    // algolia: {
    //   appId: "R2IYF7ETH7",
    //   apiKey: "599cec31baffa4868cae4e79f180729b",
    //   indexName: "index",
    // },

    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
})
