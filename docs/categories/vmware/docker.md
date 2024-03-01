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

## docker 搭建 jenkins 系统

```bash

# 搜索jenkins相关镜像
docker search jenkins

# 拉取jenkins镜像
docker pull jenkins/jenkins:lts

# 根据镜像创建容器
docker run -d -p 9100:8080 -p 50000:50000 --name jenkins-9100 jenkins/jenkins:lts
# -d 后台运行
# -p 9100:8080 设置端口映射
# -p 50000:50000 设置端口映射
# --name jenkins-9100 指定容器名
# jenkins/jenkins:lts 使用的镜像

# 查看容器状态
docker ps
docker ps -a
docker ps --all

# 浏览器打开localhost:9100，需要解锁Jenkins
# 查看初始秘钥
docker logs jenkins-9100

# 或者进入Jenkins容器，查看初始秘钥
docker exec -it jenkins-9100 bash # 进入容器
cd /var/jenkins_home/ # 进入Jenkins目录
cat secrets/initialAdminPassword # 查看初始秘钥

# 浏览器页面填写初始秘钥，进入Jenkins安装

```

## docker拉取ubuntu镜像并新建容器

```bash

# 查看ubuntu相关镜像
docker search ubuntu

# 拉取ubuntu镜像
docker pull ubuntu

# 查看ubuntu镜像
docker images
docker images -a
docker images --all

# 使用ubuntu镜像创建并启动容器
docker run -dit --name ubuntu01 ubuntu /bin/bash

# 进入容器
docker exec -it ubuntu01 /bin/bash

# 退出容器
exit


```


## docker拉取centos镜像并新建容器

```bash

# 查看centos相关镜像
docker search centos

# 拉取centos镜像
docker pull centos

# 查看centos镜像
docker images
docker images -a
docker images --all

# 使用centos镜像创建并启动容器
docker run -dit --name centos01 centos
# -d: 后台运行，不添加-d的话，会直接进入容器，退出容器服务会停止
docker run -it --name centos02 centos

# 进入容器
docker exec -it centos01 bash
docker exec -it centos01 /bin/bash

# 退出容器
exit


# curl获取网址源代码
curl www.baidu.com > a.txt

# wget下载资源，先安装wget
yum install -y wget # 报错的话，解决方式如下

# 解决方式
# 进入到 yum 的 repos 目录
cd /etc/yum.repos.d/
# 修改 centos 文件内容
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
# 生成缓存更新
yum makecache
# 运行 yum update 并重新安装 wget
yum update -y
yum -y install wget

# wget下载资源
cd /usr/local
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.86/bin/apache-tomcat-9.0.86.tar.gz

```


## centos 容器，搭建 gitlab 服务

```bash

# 使用centos镜像创建并启动容器
docker run -dit --name centos01 centos
# -d: 后台运行，不添加-d的话，会直接进入容器，退出容器服务会停止
docker run -it --name centos02 centos

# 进入容器
docker exec -it centos01 bash
docker exec -it centos01 /bin/bash

# 安装相关依赖
yum -y install policycoreutils openssh-server openssh-clients postfix

# 上面安装命令会报错，解决方式如下:
# 进入到 yum 的 repos 目录
cd /etc/yum.repos.d/
# 修改 centos 文件内容
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
# 生成缓存更新
yum makecache
# 运行 yum update
yum update -y

# 重新执行安装命令
yum -y install policycoreutils openssh-server openssh-clients postfix

# 启动ssh服务 & 设置为开机启动
systemctl enable sshd && sudo systemctl start sshd

# 上面还是会报错，因此，放弃了

# 使用centos7镜像测试下吧
docker pull centos:7

# 创建容器
docker run -dit --name centos01 centos:7

# 进入容器
docker exec -it centos01 bash

# 安装依赖
yum -y install policycoreutils openssh-server openssh-clients postfix

# 启动ssh服务 & 设置为开机启动
systemctl enable sshd && sudo systemctl start sshd

# 还是报错，尝试创建容器时指定--privileged=true参数，并指定/usr/sbin/init
docker run -dit --name centos01 --privileged=true centos:7 /usr/sbin/init

# 进入容器
docker exec -it centos01 bash

# 安装依赖
yum -y install policycoreutils openssh-server openssh-clients postfix

# 启动ssh服务 & 设置为开机启动
systemctl enable sshd && sudo systemctl start sshd

# 如果是苹果M2芯片还是会报错，解决方式如下
https://blog.csdn.net/lideqiang110119/article/details/129525432

# 再次尝试: 启动ssh服务 & 设置为开机启动
systemctl enable sshd && sudo systemctl start sshd

# 去掉sudo，再次尝试: 启动ssh服务 & 设置为开机启动
systemctl enable sshd && systemctl start sshd

# 查看sshd服务状态
systemctl status sshd

# 设置postfix开机自启，并启动，postfix支持gitlab发信功能
systemctl enable postfix && systemctl start postfix

# 开放ssh以及http服务，然后重新加载防火墙列表，没有防火墙的话，这一步省略吧
# firewall-cmd --add-service=ssh --permanent
# firewall-cmd --add-service=http --permanent
# firewall-cmd --reload

# 安装wget
yum -y install wget

# 切换目录
cd ~

# 下载gitlab包
wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.4.2-ce.0.el7.x86_64.rpm

# 安装gitlab
rpm -ivh gitlab-ce-12.4.2-ce.0.el7.x86_64.rpm

# 上面安装报错policycoreutils-python，执行下面命令
yum install policycoreutils-python

# 再次安装gitlab
rpm -ivh gitlab-ce-12.4.2-ce.0.el7.x86_64.rpm
rpm -qa | grep gitlab # 查看 gitlab 是否被安装
rpm -e gitlab-ce-12.4.2-ce.0.el7.x86_64 # 卸载 gitlab 
# rpm -e 需要卸载的安装包


# 还是安装失败，究其原因还是因为软件不是arm架构的，因此放弃了

# 修改配置
vi /etc/gitlab/gitlab.rb # 修改external_url 为 ip:8001，修改nginx['listen_port']为8001

# 重载配置及启动gitlab
gitlab-ctl reconfigure
gitlab-ctl restart

# 把8001端口添加到防火墙
firewall-cmd --zone=public --add-port=8001/tcp --permanent
firewall-cmd --reload


```

## centos容器安装JDK和TOMCAT



```bash
# 新建容器时，设置目录映射关系，并且指定平台
docker run -dit --name centos01 -v /Users/coffee/Desktop/centos/:/usr/local --platform linux/amd64  centos

# 查看容器状态
docker ps

# 进入容器
docker exec -it centos01 bash

# 进入/usr/local目录
cd /usr/local

# 下载jdk的linux版本的tar.gz文件
https://www.oracle.com/java/technologies/downloads/#java8-linux

# 解压缩
tar -zxvf jdk-8u401-linux-x64.tar.gz

# 获取jdk安装目录，并配置到/etc/profile文件中
export JAVA_HOME=/usr/local/jdk1.8.0_401
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/jre/lib/rt.jar

# 刷新文件缓存
source /etc/profile

# 查看jdk版本
java -version
javac -version



# tomcat安装使用
https://tomcat.apache.org/download-90.cgi

cd /usr/local
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.86/bin/apache-tomcat-9.0.86.tar.gz
tar -zxvf apache-tomcat-9.0.86
# 进入tomcat
cd apache-tomcat-9.0.86
# 进入bin目录
cd bin
# 启动tomcat，默认端口8080，因此创建容器时也要映射下端口: -p 9999:8080
./startup.sh


# 创建容器，添加端口映射
docker run -dit --name centos01 -v /Users/coffee/Desktop/centos/:/usr/local --platform linux/amd64  -p 9999:8080  centos

# 进入容器
docker exec -it centos01 bash

# 配置JDK并启动tomcat
vi /etc/profile
source /etc/profile
java -version
javac -version

cd /usr/local/apache-tomcat-9.0.86/bin
./startup.sh

# 本机访问localhost:9999
```