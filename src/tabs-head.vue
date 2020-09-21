<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(item,vm)=>{

      })
    }
  }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        > .line {
            width: 100px;
            border-bottom: 1px solid #bbbbbb;
            position: absolute;
            bottom: 0;
        }

        > .action-wrapper {
            margin-left: auto;

        }
    }
</style>