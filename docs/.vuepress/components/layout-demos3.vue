<template>
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
</template>
<style scoped>
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
        background: #7dbcea;
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
            <g-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </g-sider>
            <g-layout>
              <g-header style="height: 50px; background:lightskyblue;">
                header
              </g-header>
              <g-content style="height: 100px; background:deepskyblue;">
                content
              </g-content>
              <g-footer style="height: 50px; background:lightskyblue;">
                footer
              </g-footer>
            </g-layout>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>