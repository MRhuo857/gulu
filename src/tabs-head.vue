<template>
    <div class="tabs-head">
        <slot></slot>
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
    }
  }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        border: 1px solid red;
        align-items: center;
        justify-content: flex-start;

        > .action-wrapper {
            margin-left: auto;
        }
    }
</style>