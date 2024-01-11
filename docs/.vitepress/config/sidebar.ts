const other = [
    {
        text: 'Eslint',
        items: [
            { text: '序言', link: '/categories/frontend/eslint/' },
            { text: '入门', link: '/categories/frontend/eslint/001' },
            { text: '高级', link: '/categories/frontend/eslint/002' }
        ]
    },
    {
        text: 'Prettier',
        items: [
            { text: '序言', link: '/categories/frontend/prettier/' },
            { text: '入门', link: '/categories/frontend/prettier/001' },
            { text: '高级', link: '/categories/frontend/prettier/002' }
        ]
    },
    {
        text: '脚手架',
        items: [
            { text: '序言', link: '/categories/frontend/scaffold/' },
            { text: '入门', link: '/categories/frontend/scaffold/001' },
            { text: '高级', link: '/categories/frontend/scaffold/002' }
        ]
    }
]

export default {
    "/categories/frontend/webpack/": [
        {
            text: 'Webpack',
            items: [
                { text: '路线图', link: '/categories/frontend/webpack/' },
                { text: '基础配置', link: '/categories/frontend/webpack/base' },
                { text: 'CSS配置', link: '/categories/frontend/webpack/style' },
                { text: 'Eslint', link: '/categories/frontend/webpack/eslint' },
                { text: '开发服务器', link: '/categories/frontend/webpack/server' },
                { text: '代码拆分', link: '/categories/frontend/webpack/split-chunk' },
            ]
        },
    ],
    "/categories/frontend/eslint": other,
    "/categories/frontend/prettier": other,
    "/categories/frontend/scaffold": other,
}