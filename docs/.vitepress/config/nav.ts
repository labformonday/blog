import { DefaultTheme } from 'vitepress'

export default [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前端',
    activeMatch: [
      '/categories/frontend/vue/',
      '/categories/frontend/react/',
      '/categories/frontend/webpack/',
      '/categories/frontend/vite/',
      '/categories/frontend/rollup/',
      '/categories/frontend/parcel/',
      '/categories/frontend/gulp/',
      '/categories/frontend/grunt/',
    ],
    items: [
      {
        text: "前端框架",
        items: [
          {
            text: 'Vue',
            link: '/categories/frontend/vue/',
            activeMatch: '/categories/frontend/vue/'
          },
          {
            text: 'React',
            link: '/categories/frontend/react/',
            activeMatch: '/categories/frontend/react/'
          },
        ]
      },
      {
        text: "构建工具",
        items: [
          {
            text: 'Webpack',
            link: '/categories/frontend/webpack/',
            activeMatch: '/categories/frontend/webpack/'
          },
          {
            text: 'Vite',
            link: '/categories/frontend/vite/',
            activeMatch: '/categories/frontend/vite/'
          },
          {
            text: 'Rollup',
            link: '/categories/frontend/rollup/',
            activeMatch: '/categories/frontend/rollup/'
          },
          {
            text: 'Parcel',
            link: '/categories/frontend/parcel/',
            activeMatch: '/categories/frontend/parcel/'
          },
          {
            text: 'Gulp',
            link: '/categories/frontend/gulp/',
            activeMatch: '/categories/frontend/gulp/'
          },
          {
            text: 'Grunt',
            link: '/categories/frontend/grunt/',
            activeMatch: '/categories/frontend/grunt/'
          }
        ]
      },
      {
        text: "其他",
        items: [
          {
            text: 'Eslint',
            link: '/categories/frontend/eslint/',
            activeMatch: '/categories/frontend/eslint/'
          },
          {
            text: 'Prettier',
            link: '/categories/frontend/prettier/',
            activeMatch: '/categories/frontend/prettier/'
          },
          {
            text: '从零搭建脚手架',
            link: '/categories/frontend/scaffold/',
            activeMatch: '/categories/frontend/scaffold/'
          },
        ]
      },
      
    ]
  },
  {
    text: '后端',
    activeMatch: [
      '/categories/backend/go/',
      '/categories/backend/php/',
      '/categories/backend/java/',
      '/categories/backend/nodejs/',
      '/categories/backend/python/',
    ],
    items: [
      {
        text: "服务端语言",
        items: [
          {
            text: 'go',
            link: '/categories/backend/go/',
            activeMatch: '/categories/backend/go/'
          },
          {
            text: 'php',
            link: '/categories/backend/php/',
            activeMatch: '/categories/backend/php/'
          },
          {
            text: 'java',
            link: '/categories/backend/java/',
            activeMatch: '/categories/backend/java/'
          },
          {
            text: 'nodejs',
            link: '/categories/backend/nodejs/',
            activeMatch: '/categories/backend/nodejs/'
          },
          {
            text: 'python',
            link: '/categories/backend/python/',
            activeMatch: '/categories/backend/python/'
          },
        ]
      },
    ]
  },
  {
    text: '服务器',
    activeMatch: [
      '/categories/server/centos/',
      '/categories/server/ubuntu/',
    ],
    items: [
      {
        text: "服务器",
        items: [
          {
            text: 'centos',
            link: '/categories/server/centos/',
            activeMatch: '/categories/server/centos/'
          },
          {
            text: 'ubuntu',
            link: '/categories/server/ubuntu/',
            activeMatch: '/categories/server/ubuntu/'
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