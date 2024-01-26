const webpack = [
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
]

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

const gulp = [
    {
        text: 'Gulp',
        items: [
            { text: '简介', link: '/categories/frontend/gulp/000' },
            { text: '快速入门', link: '/categories/frontend/gulp/001' },
            { text: '安装', link: '/categories/frontend/gulp/002' },
            { text: 'CLI命令行', link: '/categories/frontend/gulp/003' },
            { text: 'gulpfile实例', link: '/categories/frontend/gulp/004' },
            { text: '任务', link: '/categories/frontend/gulp/005' },
            { text: 'API', link: '/categories/frontend/gulp/006' },
            { text: '使用插件', link: '/categories/frontend/gulp/007' },
            { text: '插件开发', link: '/categories/frontend/gulp/008' },
            { text: '相关产品对比', link: '/categories/frontend/gulp/009' },
            { text: '项目实例: Jquery插件开发', link: '/categories/frontend/gulp/010' },
            { text: '资源', link: '/categories/frontend/gulp/011' },
        ]
    },
]

const vmware = [
    {
        text: '虚拟机',
        items: [
            { text: 'VMware Fusion 下载 & 安装', link: '/categories/vmware/' },
            { text: '安装 Windows 系统', link: '/categories/vmware/001' },
            { text: '安装 Debian 系统', link: '/categories/vmware/002' },
            { text: 'Jenkins 搭建', link: '/categories/vmware/jenkins' },
        ]
    },
    
]
const ruoyi = [
    {
        text: '若依',
        items: [
            { text: '序', link: '/categories/backend/ruoyi/' },
            { text: 'JDK安装', link: '/categories/backend/ruoyi/001' },
            { text: 'Mysql安装', link: '/categories/backend/ruoyi/002' },
            { text: 'Maven安装', link: '/categories/backend/ruoyi/003' },
            { text: 'Redis安装', link: '/categories/backend/ruoyi/004' },
            { text: 'IDEA开发者工具', link: '/categories/backend/ruoyi/005' },
            { text: '若依代码下载', link: '/categories/backend/ruoyi/006' },
            { text: '若依二开', link: '/categories/backend/ruoyi/007' },
        ]
    },
]

const jeesite = [
    {
        text: 'JeeSite',
        items: [
            { text: '序', link: '/categories/backend/jeesite/' },
            { text: 'JDK安装', link: '/categories/backend/jeesite/001' },
            { text: 'Mysql安装', link: '/categories/backend/jeesite/002' },
        ]
    },
]

const question = [
    {
        text: '常见问题',
        items: [
            { text: '序', link: '/categories/question/' },
            { text: 'github访问失败', link: '/categories/question/001' },
            { text: 'uniapp + vue3 + ts + vite 模板运行失败', link: '/categories/question/002' },
            // { text: '待确认', link: '/categories/question/003' },
            // { text: '待确认', link: '/categories/question/004' },
        ]
    },
]

const offer = [
    {
        text: 'Offer来了',
        items: [
            { text: '序', link: '/categories/offer/' },
            { text: 'JavaScript 数据类型', link: '/categories/offer/001' },
            { text: 'JavaScript 核心 - 开箱即用', link: '/categories/offer/002' },
        ]
    },
]

export default {
    "/categories/frontend/webpack/": webpack,
    "/categories/frontend/eslint": other,
    "/categories/frontend/prettier": other,
    "/categories/frontend/scaffold": other,
    "/categories/frontend/gulp": gulp,
    "/categories/vmware": vmware,
    "/categories/backend/ruoyi": ruoyi,
    "/categories/backend/jeesite": jeesite,
    "/categories/question": question,
    "/categories/offer": offer,
}