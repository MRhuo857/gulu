<template>
    <transition name="slider">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">关闭</button>
        </div>
    </transition>
</template>

<script>
  export default {
    name: "GuluSider",
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;

        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .slider-enter-active, .slider-leave-active {
        transition: transform .5s;
    }

    .slider-enter, .slider-leave-to {
        margin-left: -200px;
    }
</style>