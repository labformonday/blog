# 基础配置

## 创建项目

```javascript

mkdir webpack-demo01 && cd webpack-demo01

pnpm init

```

## 安装依赖

```javascript

pnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

```

## 新建src/app.js文件和webpack.config.js文件

```javascript

// app.js
console.log('hello world');

```

```javascript

// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',

    plugins: [
        new HtmlWebpackPlugin(),
    ]
}

```

