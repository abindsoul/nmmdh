# 你慢慢导哈 导航项目

## 🙌 介绍

这是一个使用 [Nuxt 3](https://nuxt.com/) 创建的导航项目。

因为常常需要翻页文档查资料，但是每次都要去找文档很不方便，
所以就想着做一个导航项目，方便自己查找文档。

本导航收录了个人目前常常使用到的文档，当然也开发了自定义的模块
只需要输入你的导航名称和链接就可以将它保存在本地了，所以要注意清除浏览器缓存时可能会导致自己加入的链接都消失哦。

预览地址请 [戳这里](https://nmmdh.site/)

更多信息请 [前往博客](https://afreesoul.top/index.php/archives/104/) .

## 克隆到本地 😮‍💨

```bash
git clone https://github.com/ChenYuXuan/navigation.git
```

## 安装依赖

项目用的是yarn，可以自己试试别的

```bash
# yarn
yarn install
```

## 👐  启动


```bash
# yarn
yarn dev --open
```
## <font color=red>注意</font>  😕 

<font color=red>启动后可能会出现 500 window is not defined 的错误</font>

原因是引入了 current-device 库来判断移动端，
而在开发阶段虽然 使用 process.client 进行了客户端的判断后再去运行该库的功能

但开发阶段仍会报错，你可以尝试将 isToMobile.global.ts 修改为 isToMobile.ts 来降级该中间件这样它就不会在项目中引用

或者你也可以直接删除该文件，依据个人的需求

## 👌 部署 

### PS:请参考官网进行部署
[官网戳这里](https://nuxt.com.cn/docs/getting-started/deployment)


## 静态打包

生成纯静态文件
 
```bash
# yarn
yarn generate
```
## 动态打包

需要在服务器安装node，详情参考官网进行部署

```bash
# yarn
yarn build
```

## ☝ 自定义功能说明

支持增、删、改，自定义的数据储存在浏览器的local storage里，

| 字段      | 类型          |
| ----------- | ----------- |
| title       | String      |
| url         | String      |

### 新增

传入自己的title与url即可

1. title 与 url都不可为空
2.  title 不可重复

### 删除

传入需要删除的title即可，不可为空

### 修改

传入需要修改title与新的url


1. 修改的title不可为空
2. 新的url不可为空
2. 不支持修改title，如有需要请删除原title重新添加




## 🤝 感谢

感谢 [nuxt3](https://nuxt.com.cn/) 提供的框架

感谢 [uiverse](https://uiverse.io/) 提供的UI效果

感谢 [我自己](https://www.afreesoul.top/) 进行开发嘿嘿嘿

##  喜欢的话可以点个小小的start 😭
