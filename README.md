# 项目演示地址：[https://blog.chaochao.cool](https://blog.chaochao.cool)

# 由于考虑到国内网络问题，在此提供镜像地址

[gitee](https://gitee.com/peakchao/react-blog.git)
[github](https://github.com/zhangzhichaolove/react-blog.git)

# 项目截图

![首页](screenshot/main.png)
![博客详情](screenshot/blog.png)
![博客编辑](screenshot/edit.png)
# React-Blog 使用说明

## 后端服务

> 注意：本博客采用前后端分离方式开发，故此博客运行需要启动后端服务进行辅助，后端服务请在Releases下载,然后执行下面命令启动即可。

```
# windows
./blog_api.exe
# mac and linux
./blog_api
```

> 如果不需要服务在后台运行，请在启动时候添加如下参数。

```
./blog_api -d=false
```

> 如果你已经后台运行了服务，此时需要停止后台运行请使用如下命令。

```
./blog_api stop
```

## 快速开始

> 克隆项目源码

```
git clone https://github.com/zhangzhichaolove/react-blog.git
```

> 安装项目依赖

```
cd react-blog
npm install
```

> 运行项目

```
npm start
```

> 浏览器访问[http://localhost:3000](http://localhost:3000)

## 上线部署

> 确认域名地址是否配置完毕，[配置地址](util/AxiosUtil.ts)

## 欢迎大家加入开发，一起完善功能。
## QQ讨论群:一群 `56821781`  二群 `632512781`