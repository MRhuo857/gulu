---
title:Grid
---


# Grid-24网格

## 预览

<ClientOnly>
<grid-demos></grid-demos>
</ClientOnly>

::: details 点击查看代码
```html
  <div style="padding-top: 16px;">
        <g-row class="demoRow">
            <g-col span="24">
                <div class="demoCol">col</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="8">
                <div class="demoCol">col-8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">col-8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">col-8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6">
                <div class="demoCol">col-6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">col-6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">col-6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">col-6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">col-4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">col-2</div>
            </g-col>
        </g-row>
    </div>
```
:::

## 设置gutter
<ClientOnly>
<grid-demos2></grid-demos2>
</ClientOnly>

::: details 点击查看代码
```html
      <div style="padding-top: 16px;">
          <g-row class="demoRow" gutter="10">
              <g-col span="8">
                  <div class="demoCol">col-8</div>
              </g-col>
              <g-col span="8">
                  <div class="demoCol">col-8</div>
              </g-col>
              <g-col span="8">
                  <div class="demoCol">col-8</div>
              </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
              <g-col span="6">
                  <div class="demoCol">col-6</div>
              </g-col>
              <g-col span="6">
                  <div class="demoCol">col-6</div>
              </g-col>
              <g-col span="6">
                  <div class="demoCol">col-6</div>
              </g-col>
              <g-col span="6">
                  <div class="demoCol">col-6</div>
              </g-col>
          </g-row>
      </div>
```
:::

## 设置间隔
<ClientOnly>
<grid-demos3></grid-demos3>
</ClientOnly>

::: details 点击查看代码
````html
  <div style="padding-top: 16px;">
          <g-row class="demoRow" gutter="10">
              <g-col span="8">
                  <div class="demoCol">col-8</div>
              </g-col>
              <g-col span="8" offset="8">
                  <div class="demoCol">col-8</div>
              </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
              <g-col span="6" offset="6">
                  <div class="demoCol">col-6</div>
              </g-col>
              <g-col span="6" offset="6">
                  <div class="demoCol">col-6</div>
              </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
              <g-col span="4">
                  <div class="demoCol">col-4</div>
              </g-col>
              <g-col span="4" offset="4">
                  <div class="demoCol">col-4</div>
              </g-col>
              <g-col span="4" offset="8">
                  <div class="demoCol">col-4</div>
              </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
              <g-col span="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2" offset="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2" offset="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2" offset="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2">
                  <div class="demoCol">col-2</div>
              </g-col>
              <g-col span="2" offset="2">
                  <div class="demoCol">col-2</div>
              </g-col>
          </g-row>
      </div>
````
:::