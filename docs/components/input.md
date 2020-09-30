---
title:Input
---


# Input-输入框
## 简单用法
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

::: details 点击查看代码
```html
    <div style="padding-top: 16px;">
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>
        <g-input value="中文" error="error"></g-input>
    </div>
```
:::

## 双向绑定
<ClientOnly>
<input-demos2></input-demos2>
</ClientOnly>

::: details 点击查看代码
```html
    <div style="padding-top: 16px;">
            <g-input v-model="value"></g-input>
            <div>
                value: {{value}}
            </div>
    
        </div>
```
:::
## API
### 1、disabled
表示是否为禁用状态，默认为false

### 2、readonly
表示只读状态，与 disabled 相似。但是 disabled 不可以被 Tab 键选中，readonly 可以被选中，但不能修改。

### 3、error
error属性用于提示

### 4、v-model
用于双向绑定

