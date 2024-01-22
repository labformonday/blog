---
title: 从零搭建脚手架
author: labformonday
---

# 从零搭建脚手架

- https://zhuanlan.zhihu.com/p/630328885
- https://cloud.tencent.com/developer/article/2270658?areaSource=102001.4&traceId=2os9_nMNFc8m_cJJOBMpd

## 什么是脚手架

它是一个全局命令行工具，即在任何目录下执行我们定义的命令就可以运行 ，同时它也具有创建项目初始化代码文件及目录的能力。

## 脚手架的基本功能有哪些

它必须具有全局命令行执行能力，同时也必须具有命令行交互能力，也必须具有项目初始化代码下载能力。

## 如何实现一个自己的脚手架工具

总共有五步如下：

1. 创建自定义全局命令
2. 命令参数接收处理
3. 终端交互
4. 下载远程项目代码
5. 项目初始化完成提示

## 下面我们来一步步写一下自己的脚手架工具

### 1.创建自定义全局命令

#### 创建项目文件夹mycli，在新的目录下在新建一个bin目录，在bin目录下创建一个mycli.js文件，当作我们的一个全局命令入口

```bash
# 进入桌面
cd ~/Desktop

# 创建mycli项目文件夹
mkdir mycli

# 进入文件家
cd mycli

# 创建bin文件夹
mkdir bin

# 进入bin文件夹
cd bin

# 创建mycli.js文件
touch mycli.js

# 返回上一层
cd ..

# 初始化package.json文件
npm init -y

```

#### 我们编写mycli.js文件

```javascript
// 在mycli.js文件中的第一行，则是告诉我们执行这个脚本使用node来进行执行
#!/usr/bin/env node

console.log('Welcome!')

```

首先执行`npm link`命令先进行挂载，将该文件挂载到全局变量

```bash
# 没有权限
npm link

# 执行成功后，会创建全局命令，可以使用npm ls -g查看
sudo npm link

# 查看npm link执行后发生了什么
npm ls -g

# 执行全局命令，测试
mycli

```

#### 借助commander，来进行处理help选项

```bash
# 先进行下载commander包
npm i commander

```
下载完之后，修改 `bin/mycli.js` 文件内容如下:

```javascript
#!/usr/bin/env node
const { program } = require('commander');
program.parse(process.argv);

```

```bash
# 执行以下命令，查看输出
mycli -h
mycli --help

# 这里能打印出来东西是因为它集成到command里面了，
# program.prase是将你传过去的所有命令行参数进行了解析，都可以通过--help来进行查看

```

#### 编写自己的命令行参数

```javascript
#!/usr/bin/env node

// 引入依赖
const { program } = require('commander');

// 设置命令行参数
program.option('-f, --framework <framework>', '设置框架');

// 参数解析
program.parse(process.argv);

```

这样就会出现我们编写的信息，那么我们试着使用一下这个命令看能不能输出什么

因为我们没有对这个命令进行编写，所以它不会输出什么。

#### 使用commander处理自定义命令

```javascript
#!/usr/bin/env node

const { program } = require('commander');

program.option('-f, --framework <framework>', '设置框架');

program.command('create <project>').alias('crt').description('创建项目').action(function(project, args){
    console.log(project, args);
})

program.parse(process.argv);

```

这里解释一下，command是执行参数，alias是定义别名即简写内容，description描述参数信息，因为你在这里解析参数的时候会自动注册到--help里面，action函数里面是一个回调函数，这里面接受两个参数，一个是project项目名称，一个是后面的参数，在这个回调函数里面执行业务逻辑。

我们现在看一下--help命令，看一下我们的命令参数有没有注册到里面

```bash
mycli -h
mycli --help

```

#### commander逻辑代码模块化拆分

我们在上述代码中可以看到使用program.operation函数来进行help命令参数的写入。那么我们可以将其进行封装到一个模块里，那么下回在使用的时候直接导入对应的模块就好了。
我又新建了一个lib文件夹，在lib文件夹里面创建help.js在help.js里面编写业务部分进行导出，然后在mycli.js里面进行引入即可。


```javascript
// lib/core/help.js
module.exports = function(program){
    program.option('-f, --framework <framework>', '设置框架');
}
```

```javascript
// bin/mycli.js
#!/usr/bin/env node

const { program } = require('commander');
const help = require('../lib/core/help.js')
help(program)
program.command('create <project>').alias('crt').description('创建项目').action(function(project, args){
    console.log(project, args);
})

program.parse(process.argv);

```

下面再封装一下create命令

```javascript
// lib/core/command.js
module.exports = function(program){
    program.command('create <project>').alias('crt').description('创建项目').action(function(project, args){
        console.log(project, args);
    })
}
```

```javascript
// bin/mycli.js
#!/usr/bin/env node

const { program } = require('commander');
const help = require('../lib/core/help.js')
const command = require('../lib/core/command.js')
help(program)
command(program)

program.parse(process.argv);
```

#### 借助inquirer，命令行问答交互

首先进行下载模块

```bash
npm i inquirer

# 注意，上方命令会安装最新版本，不再支持commonjs规范
# 因此可以安装指定版本
npm i inquirer@6.5.2

# 查看所有版本
npm v inquirer versions

```

使用inquirer，以下逻辑可以写在创建命令的回调中

```javascript
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "list",
        name: "framework",
        choices: ["express", "koa", "egg"],
        message: "选择你需要使用的框架",
    },
]).then((answer) => {
    console.log(answer);
});
```

### 借助 `download-git-repo` ，远程下载仓库模板代码

```bash
npm i download-git-repo

```

```javascript
const download = require('download-git-repo');

download()

```