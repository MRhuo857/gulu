<template>
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
</template>
<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }
    .g-header{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .g-sider{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #7dbcea;
        color: white;
    }
    .g-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .g-footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
  import GLayout from '../../../src/layout'
  import GHeader from '../../../src/header'
  import GFooter from '../../../src/footer'
  import GContent from '../../../src/content'
  import GSider from '../../../src/sider'
  export default {
    components: {GLayout, GHeader, GFooter, GContent, GSider},
    data () {
      return {
        content: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </g-sider>
              <g-content style="height: 100px; background:deepskyblue;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>