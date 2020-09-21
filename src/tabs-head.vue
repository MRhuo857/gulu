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
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width,left}=vm.$el.getBoundingClientRect()
        this.$refs.line.style.width=`${width}px`
        this.$refs.line.style.left=`${left}px`
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
            border-bottom: 2px solid blue;
            position: absolute;
            bottom: 0;
            transition:all 200ms;
        }

        > .action-wrapper {
            margin-left: auto;

        }
    }
</style>