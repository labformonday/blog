import { DefaultTheme } from 'vitepress'

export default [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前端',
    activeMatch: [
      '/categories/vue/',
      '/categories/react/',
      '/categories/webpack/',
      '/categories/vite/',
      '/categories/rollup/',
      '/categories/parcel/',
      '/categories/gulp/',
      '/categories/grunt/',
    ],
    items: [
      {
        text: "前端框架",
        items: [
          {
            text: 'Vue',
            link: '/categories/vue/',
            activeMatch: '/categories/vue/'
          },
          {
            text: 'React',
            link: '/categories/react/',
            activeMatch: '/categories/react/'
          },
        ]
      },
      {
        text: "构建工具",
        items: [
          {
            text: 'Webpack',
            link: '/categories/webpack/',
            activeMatch: '/categories/webpack/'
          },
          {
            text: 'Vite',
            link: '/categories/vite/',
            activeMatch: '/categories/vite/'
          },
          {
            text: 'Rollup',
            link: '/categories/rollup/',
            activeMatch: '/categories/rollup/'
          },
          {
            text: 'Parcel',
            link: '/categories/parcel/',
            activeMatch: '/categories/parcel/'
          },
          {
            text: 'Gulp',
            link: '/categories/gulp/',
            activeMatch: '/categories/gulp/'
          },
          {
            text: 'Grunt',
            link: '/categories/grunt/',
            activeMatch: '/categories/grunt/'
          }
        ]
      },
      {
        text: "校验工具",
        items: [
          {
            text: 'Eslint',
            link: '/categories/eslint/',
            activeMatch: '/categories/eslint/'
          },
          {
            text: 'Prettier',
            link: '/categories/prettier/',
            activeMatch: '/categories/prettier/'
          },
        ]
      }
    ]
  },
  {
    text: '服务端',
    activeMatch: [
      '/categories/php/',
      '/categories/java/',
      '/categories/linux/',
      '/categories/nodejs/',
      '/categories/python/',
      '/categories/linux/',
      '/categories/ubuntu/',
    ],
    items: [
      {
        text: "服务端语言",
        items: [
          {
            text: 'php',
            link: '/categories/php/',
            activeMatch: '/categories/php/'
          },
          {
            text: 'java',
            link: '/categories/java/',
            activeMatch: '/categories/java/'
          },
          {
            text: 'nodejs',
            link: '/categories/nodejs/',
            activeMatch: '/categories/nodejs/'
          },
          {
            text: 'python',
            link: '/categories/python/',
            activeMatch: '/categories/python/'
          },
        ]
      },
      {
        text: "服务器",
        items: [
          {
            text: 'linux',
            link: '/categories/linux/',
            activeMatch: '/categories/linux/'
          },
          {
            text: 'ubuntu',
            link: '/categories/ubuntu/',
            activeMatch: '/categories/ubuntu/'
          },

        ]
      },
    ]
  },
  {
    text: '常见问题',
    link: '/categories/question/',
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://xdbaoku.com' },
      {
        text: '项目网',
        link: 'https://xdbaoku.com'
      }
    ]
  }

] as DefaultTheme.NavItem[]