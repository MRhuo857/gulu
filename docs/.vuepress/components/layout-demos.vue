<template>
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
</template>
<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }
    .g-layout{
        color: white;
        margin-bottom: 50px;
        >.g-header{
            height: 50px;
            background:lightskyblue ;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        >.g-content{
            height: 100px;
            background:deepskyblue;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        >.g-footer{
            height: 50px;
            background:lightskyblue ;
            display:flex;
            justify-content: center;
            align-items: center;
        }
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
  }
</script>