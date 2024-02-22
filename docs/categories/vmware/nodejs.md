# Linux安装NodeJS

nodejs下载地址: https://nodejs.org/dist/

## 下载NodeJS到指定目录文件夹

```bash

cd /usr/local

# 14版本下载
wget https://nodejs.org/dist/v14.17.0/node-v14.17.0-linux-x64.tar.xz

# 16版本
wget https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz

# 18版本下载
wget https://nodejs.org/dist/v18.9.1/node-v18.9.1-linux-x64.tar.xz

# 20版本下载
wget https://nodejs.org/dist/v20.9.0/node-v20.9.0-linux-x64.tar.xz

# 查看是否存在下载的文件
ls -la

```

## 解压NodeJS

```bash

# 解压
tar -xvf node-v16.20.2-linux-x64.tar.xz 

# 查看是否解压成功
ls -la

# 重命名为node，也可以不重命名
mv node-v16.20.2-linux-x64 node

# 删除下载的压缩文件
rm node-v16.20.2-linux-x64.tar.xz

```

## 创建软链接

```bash
ln -s /usr/local/node-v16.20.2-linux-x64/bin/node /usr/local/bin/node
ln -s /usr/local/node-v16.20.2-linux-x64/bin/npm /usr/local/bin/npm

```

## 查看node和npm版本

```bash

node -v
npm -v

```

## 设置npm镜像

```bash
npm config set registry https://registry.npmmirror.com
```

## 查看镜像

```bash
npm get registry
npm config get registry
```

## 查看npm更多配置

```bash

npm config ls

# 最详细信息
npm config ls -l

```

## 全局安装pnpm & 设置软链接

```bash
# 全局安装pnpm
npm i -g pnpm

# 设置软链接
ln -s /usr/local/node-v16.20.2-linux-x64/bin/pnpm /usr/local/bin/pnpm

# 查看pnpm版本，验证是否安装配置成功
pnpm -v

```

## 全局安装yarn & 设置软链接

```bash
# 全局安装yarn
npm i -g yarn

# 设置软链接
ln -s /usr/local/node-v16.20.2-linux-x64/bin/yarn /usr/local/bin/yarn

# 查看yarn版本，验证是否安装配置成功
yarn -v

```

## 查看npm全局安装了哪些工具

```bash
npm ls -g

```