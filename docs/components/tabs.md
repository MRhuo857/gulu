---
title:Tabs
---


# Tabs
## 点击弹出
<ClientOnly>
<tab-demos></tab-demos>
</ClientOnly>

::: details 点击查看代码
```html
 <div style="padding-top: 16px;">
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">tab-1</g-tabs-item>
                <g-tabs-item name="2">tab-2</g-tabs-item>
                <g-tabs-item name="3">tab-3
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">content 1</g-tabs-pane>
                <g-tabs-pane name="2">content 2</g-tabs-pane>
                <g-tabs-pane name="3">content 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
```
