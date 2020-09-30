<template>
    <div style="padding-top: 16px;">
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>
        <g-input value="中文" error="error"></g-input>
    </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        selected: '1',
        content: `
          <g-input></g-input>
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input value="中文" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>