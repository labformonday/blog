---
outline: deep
---

# prettier

This page demonstrates usage of some of the runtime APIs provided by VitePress.

## 初始化

```javascript

mkdir testdir

cd testdir

npm init -y

npm init @eslint/config

// 新建src/main.js文件，随便写点内容
const a = "hello"
let b = 'world'
var c = "good";
console.log(a);

// 执行
npx eslint src/main.js // 报错 no-unused-vars

// 可以通过修改eslint的配置文件调整告警级别
```

## 常用规则

```javascript
module.exports = {
    // ...
    "rules": {
        "no-unused-vars": 2, // 未使用的变量
        "no-console": 2, // 禁用console
        "semi": 2, // 需要分号结尾符，否则报错
        "quotes": 2, // 字符串需要双引号包裹
        "space-before-function-paren": 2, // 
    }
}

```

## 全部规则查看

[https://eslint.nodejs.cn/docs/latest/rules](https://eslint.nodejs.cn/docs/latest/rules)

## 修复

针对`semi` | `quotes` 等规则，可以使用命令自动修复，命令如下

```javascript

npx eslint src/main.js --fix
```