---
title:Toast
---


# Toast
## 点击弹出
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

::: details 点击查看代码
```html
  <div style="padding-top: 16px;">
         <div>
             <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
             <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
             <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
         </div>
     </div>
```
:::

## 设置关闭按钮
<ClientOnly>
<toast-demos2></toast-demos2>
</ClientOnly>

::: details 点击查看代码
```html
    <div style="padding-top: 16px;">
        <div>
            <g-button @click="onClickButton">上方弹出</g-button>
        </div>
    </div>
```
:::

## 支持HTML语法
<ClientOnly>
<toast-demos3></toast-demos3>
</ClientOnly>

::: details 点击查看代码
```html
    <div style="padding-top: 16px;">
        <div>
            <g-button @click="onClickButton">上方弹出</g-button>
        </div>
    </div>
```
:::


