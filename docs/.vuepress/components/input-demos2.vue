<template>
    <div style="padding-top: 16px;">
        <g-input v-model="value"></g-input>
        <div>
            value: {{value}}
        </div>

    </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        value: 'hello',
        content: `
          data:{
            value: '1'
          }
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>