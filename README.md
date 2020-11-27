<p align="center">
    <a href="https://admin.makeit.vip/">
        <img width="200" src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHV7QkoCAeo6PAAARuoXj0Jc275.png">
    </a>
</p>

<h1 align="center" color="green">
    <a href="https://admin.makeit.vip/" target="_blank" style="color: #41b995">
        Makeit Admin Pro
    </a>
</h1>

<div align="center">

A unified template used to backend management based on Vue3.0 + Ant Design Vue + Vite

[![npm package](https://img.shields.io/npm/v/makeit-admin-pro.svg?style=flat-square)](https://www.npmjs.org/package/makeit-admin-pro)
[![npm_downloads](http://img.shields.io/npm/dm/makeit-admin-pro.svg?style=flat-square)](http://www.npmtrends.com/makeit-admin-pro)
![MIT](https://img.shields.io/badge/license-MIT-ff69b4.svg)
![webpack](https://img.shields.io/badge/webpack-5.3.2-orange.svg)
![vue](https://img.shields.io/badge/vue-3.0.2-green.svg)
![vite](https://img.shields.io/badge/vite-1.0.0-yellow.svg)
![axios](https://img.shields.io/badge/axios-0.21.0-red.svg)
![ant design vue](https://img.shields.io/badge/ant%20design%20vue-2.0.0-blueviolet.svg)
![vue router](https://img.shields.io/badge/vue%20router-4.0.0-inactive.svg)
![vuex](https://img.shields.io/badge/vuex-4.0.0-informational.svg)

<a href="https://admin.makeit.vip/">
    <img src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHV_AaACAOsS9AAKiYZr6iiw886.png">
</a>

<a href="https://admin.makeit.vip/">
    <img src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHV_AaAaATms4AALLSSrBvlw858.png">
</a>
</div>

## 关于

> Makeit Admin Pro，基于 Vue3.0 + Vite 开发，结合 Ant Design Vue 组件库开发的一套适合中后台管理项目的统一 UI 框架，包含统一的页面布局 / 注册页面 / 登录页面 / 验证码 / 动态配置项目菜单等常用模块，开箱即用。持续开发更新中 ...

## 安装

```bash
npm i makeit-admin-pro
```

## 使用
```ts
import { createApp } from 'vue'
import App from './App.vue'

import MakeitAdminPro from 'makeit-admin-pro'
import 'makeit-admin-pro/dist/miitvip.min.css'

createApp(App).use(MakeitAdminPro).mount('#app')
```

## 布局
```vue
<template>
    <mi-layout></mi-layout>
</template>

/**
 * 组件支持的参数
 * [ embed: boolean ] - 是否为嵌入模块（嵌入模块只显示 Content 区域，其它内容不显示）
 * [ siderClassName: string ] - 左侧 Sider 样式类名
 * [ menuClassName: string ] - 左侧菜单样式类名，方便自定义样式
 * [ sider: Slot | VNode ] - 通过 <template v-slot:sider></template> 的形式自定义 Sider 内容
 * [ header: Slot | VNode ] - 通过 <template v-slot:header></template> 的形式自定义 Header 内容
 * [ footer: Slot | VNode ] - 通过 <template v-slot:footer></template> 的形式自定义 Footer 内容
 */
```

## 更多
> 更多内容请查看示例：https://admin.makeit.vip