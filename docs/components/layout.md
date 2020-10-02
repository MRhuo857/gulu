---
title:Layout
---


# Layout-布局

## 布局一
<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

::: details 点击查看代码
```html
<div style="padding-top: 16px;">
        <g-layout class="g-layout">
            <g-header class="g-header" >
                header
            </g-header>
            <g-content class="g-content">
                content
            </g-content>
            <g-footer class="g-footer">
                footer
            </g-footer>
        </g-layout>
    </div>
```
:::


## 布局二
<ClientOnly>
<layout-demos2></layout-demos2>
</ClientOnly>

::: details 点击查看代码
```html
  <div style="padding-top: 16px;">
        <g-layout class="g-layout" style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header class="g-header" style="height: 50px; background:lightskyblue; ">
                header
            </g-header>
            <g-layout>
                <g-sider class="g-sider" style="height: 100px; width:200px; ">
                    sider
                </g-sider>
                <g-content class="g-content" style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
            </g-layout>
            <g-footer class="g-footer" style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>
    </div>
```
:::

## 布局三
<ClientOnly>
<layout-demos3></layout-demos3>
</ClientOnly>

::: details 点击查看代码
```html
 <div style="padding-top: 16px;">
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider class="g-sider" style=" ; width:200px;">
                sider
            </g-sider>
            <g-layout>
                <g-header class="g-header" style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-content class="g-content" style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
                <g-footer class="g-footer" style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
        </g-layout>
    </div>
```
:::