<template>
    <div class="row">
        <slot/>
    </div>
</template>

<script>
  export default {
    name: "row"
  }
</script>

<style scoped lang="scss">
    .row{
        display: flex;
    }

</style>