<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject:['eventBus'],
    created() {
      console.log('爷爷给爸爸的');
      console.log(this.eventBus);
    }
  }
</script>

<style scoped>

</style>