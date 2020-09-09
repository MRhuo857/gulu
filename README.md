# 轱辘 — 一个Vue UI组件
[![Build Status](https://travis-ci.org/MRhuo857/gulu.svg?branch=master)](https://travis-ci.org/MRhuo857/gulu)

## 介绍
这是我在学习Vue过程中做的一个UI框架，希望对你有帮助。

## 开始使用
1.添加css样式
 使用本框架前，请在css中开启border-box
     
````
 *,*::before,*::after{box-sizing:border-box;}
````
IE 8 及以上浏览器都支持样式

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
````
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
````
IE 15 及以上浏览器都支持此样式。

2，安装gulu
````
npm i --save gulu
````
3,引入gulu
````
import {Button, ButtonGroup, Icon} from 'frank-test-1-1'
import 'frank-test-1-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
````
## 文档

## 提问

## 变更记录

## 联系方式

##贡献代码
