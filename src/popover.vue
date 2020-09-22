<template>
    <div class="popover" @click.stop="xxx">
        <div v-if="visible" class="content-wrapper" @click.stop>
            <slot name="content"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data() {
      return {visible: false}
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible===true){
          this.$nextTick(()=>{
            let eventHandler=()=>{
              this.visible=false
              console.log('document 隐藏popover')
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }else{
          console.log('vm隐藏popover')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        >.content-wrapper{
            border: 1px solid red;
            position: absolute;
            bottom: 100%;
            left: 0;
            box-shadow: 0 0 2px rgba(0,0,0,0.5);
        }
    }

</style>