# 安装

- 官网地址: https://www.Jenkins.io/zh
- 下载地址: https://www.Jenkins.io/zh/download/
- MacOS版下载地址: https://www.Jenkins.io/download/lts/macos/

Sample commands:
- Install the latest LTS version: `brew install Jenkins-lts`
- Start the Jenkins service: `brew services start Jenkins-lts`
- Restart the Jenkins service: `brew services restart Jenkins-lts`
- Update the Jenkins version: `brew upgrade Jenkins-lts`

## 使用 `Brew` 安装

```bash
$ brew install Jenkins-lts

```

### 启动 & 配置

```bash
brew services start Jenkins-lts

```

启动成功后，在浏览器输入`http://localhost:8080`，如下

![001](./pics/Jenkins//001.png)

按照上图提示，找到密码并键入，继续

![002](./pics/Jenkins//002.png)

选择`无`，点击安装，如下图所示

![003](./pics/Jenkins//003.png)

创建第一个管理员用户信息

![004](./pics/Jenkins//004.png)

保存后，进入实例配置页面（主要是配置URL），如下

![005](./pics/Jenkins//005.png)

保存后就配置完成了，开始使用Jenkins

![006](./pics/Jenkins//006.png)

### 更换插件源

- 登录后界面如下

![007](./pics/Jenkins//007.png)

- 更换插件源: https://mirrors.tuna.tsinghua.edu.cn/Jenkins/updates/update-center.json

```bash
https://mirrors.tuna.tsinghua.edu.cn/Jenkins/updates/update-center.json
```

更换原因: `Jenkins` 插件源默认连接的是 `Jenkins` 自己的服务器，如果小伙伴们连接外网的速度不够好， 就容易出现下载插件失败的问题

![008](./pics/Jenkins//008.png)

![009](./pics/Jenkins//009.png)

将`~/.Jenkins/updates/default.json`文件中的`updates.Jenkins.io/download`更换为`mirrors.tuna.tsinghua.edu.cn/Jenkins`
将`~/.Jenkins/updates/default.json`文件中的`www.google.com`更换为`www.baidu.com`

更换完成后，重启 `Jenkins` 服务

```bash
brew services restart Jenkins-lts

```

### 创建Item或Job

![010](./pics/Jenkins//010.png)


### 安装插件

- Git
- NodeJS: 需在全局工具中进行配置
- Email Extension
- Html Publisher
...

## 使用 `war` 文件

::: tip
前置条件: 需要JAVA运行环境，JDK/JRE
:::

- [下载 Jenkins](http://mirrors.Jenkins.io/war-stable/latest/Jenkins.war)
- 打开终端进入到下载目录
- 运行命令 `java -jar Jenkins.war --httpPort=8080`
- 打开浏览器进入链接 http://localhost:8080
- 按照说明完成安装

# 目录列表说明

`Jenkins` 系统是以本地文件的方式存储在服务器上的，是以不同的文件夹来区分不同的配置，因此需要了解一下每个文件夹的作用，默认 `Jenkins` 会被安装在当前用户目录下的 `.jenkins` 文件夹中

启动时，只有以下几个目录文件夹

- jobs: 用于存放项目工程，默认为空
- nodes: 默认为空
- plugins: 默认为空
- secrets
- updates
- userContent
- users
- war


# 使用

一个全新前端项目如何从零开始创建及配置

## Jenkins创建以及使用job（项目）应用

1. 新建job
2. 自定义工作空间: 指定你的项目在哪里，比如在服务器的某个目录下
3. 输入执行命令
4. 执行

# 集成新功能

J'enkins的所以功能依赖于插件的安装使用，因此新功能的集成首先需要进行插件的安装，举个例子吧

## Jenkins集成Allure报告

1. 安装 `Allure` 插件: `Allure Jenkins Plugin`，点击老头logo---选择左侧`管理Jenkins`菜单---选择系统配置下的管理插件---选择可安装的---输入allure搜索---选中并直接安装
2. 进行全局工具配置: 插件安装是全局生效的，插件使用前需要进行全局工具配置，点击老头logo---选择左侧 `管理Jenkins` 菜单---选择系统配置下的全局工具配置---找到对应的插件---进行配置（别名和安装目录，注意需要取消自动安装）
3. 在job中配置Allure报告

## Jenkins持续集成企业微信

Jenkins构建结束后自动把结果发送到企业微信群中，并且通过此结果可以直接查看Jenkins控制台

1. 为企业微信群添加群机器人，获取webhook地址

```bash
# webhook地址
https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=
```

2. 安装企业微信相关的Jenkins插件: `Qy Wechat Notification`
3. 进入`管理Jenkins`---配置系统---企业微信通知配置---配置默认webhook地址
4. 进入相关job，添加构建后操作

## Jenkins持续集成钉钉

百度搜索: `Jenkins 钉钉`

## Jenkins持续集成电子邮件通知

1. 安装插件: `Email ...`
2. 注册163邮箱并开启POP3和SMTP功能，获取密码
