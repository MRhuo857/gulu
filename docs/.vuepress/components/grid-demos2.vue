
<template>
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
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        background: #1890ff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
</style>
<script>
  import GRow from '../../../src/row'
  import GCol from '../../../src/col'
  export default {
    components: {GRow, GCol},
  }
</script>