## 安装

如果是windows或者mac电脑，下载软件进行安装

如果是liunx使用命令安装

## 常用命令

```bash

# 查看docker命令
docker

# 查看指定命令帮助
docker command --help

# 查看已下载的镜像
docker images

# 查看正在运行中的容器
docker ps

# 查看所有的容器（包含未在运行中的）
docker ps -a
docker ps --all


# 想要下载或拉取nginx镜像
# 第一步使用docker search查看nginx相关镜像
docker search nginx
# 第二步拉取镜像
docker pull nginx

# 根据nginx镜像创建一个容器，运行一个容器
docker run -d -p 8090:80 nginx   # -d: 后台运行，-p: 设置端口映射，把本机8090映射到nginx容器的80端口

# 容器创建成功后处在运行状态

# 查看运行中的容器
docker ps

# 可以看到容器会有一个自动生成的名字，也可以在创建的时候指定容器名称，如:
docker run -d -p 8091:80 --name nginx-8091 nginx

# 或者可以给容器重命名
docker rename 容器名 新容器名

# 停止容器
docker stop nginx-8091

# 启动容器
docker start nginx-8091
docker restart nginx-8091

# 删除未运行的容器
docker rm 容器名

# 删除正在运行的容器
docker rm -f 容器名

# 

```

```bash

# 进入指定容器，容器相当于虚拟机，也是一台电脑
docker exec -it 容器ID/容器名 /bin/bash

# 查看当前目录
pwd

# 查看目录下文件夹
ls -la

# 如果是nginx，查看/etc/nginx目录下
cd /etc
ls -la
cd nginx
ls -la
cd conf.d
cat default.conf

```

```bash

# 创建容器并把容器内文件夹映射到本地文件夹
# 只映射一个文件夹，换行解释
docker run -d # -d: 后台运行
-p 9001:80 # 设置端口映射
--name nginx-9001 # 自定义容器名称
-v /Users/coffee/Documents/nginx/html:/usr/share/nginx/html # 文件夹映射关系，冒号前面是本地文件夹，冒号后面是容器内文件夹
nginx # 容器使用的镜像名称
# 不换行
docker run -d -p 9001:80 --name nginx-9001 -v /Users/coffee/Documents/nginx/html:/usr/share/nginx/html nginx

# 映射多个文件夹，换行展示
docker run -d 
-p 9002:80 
--name nginx-9002 
-v /Users/coffee/Documents/nginx/html:/usr/share/nginx/html 
-v /Users/coffee/Documents/nginx/conf.d:/etc/nginx/conf.d 
nginx
# 映射多个文件夹，不换行展示
docker run -d -p 9002:80 --name nginx-9002 -v /Users/coffee/Documents/nginx/html:/usr/share/nginx/html -v /Users/coffee/Documents/nginx/conf.d:/etc/nginx/conf.d nginx


```