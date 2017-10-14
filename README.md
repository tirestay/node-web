# 安装步骤

**安装**
- 1. 安装nodejs
- 2. 安装并配置cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

**运行**
- 1. 命令行下cd到项目的根目录
```
cd ~/projects/demo
```
- 2. 第一次安装或者每次修改项目的依赖包之后,运行如下命令,如果没有修改依赖包,则跳过此步骤
```
cnpm install
```
- 3. 运行
```
cnpm start
```