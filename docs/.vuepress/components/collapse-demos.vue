<template>
    <div>
        <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="标题1" name="1">这里是标题一的内容</g-collapse-item>
            <g-collapse-item title="标题2" name="2">这里是标题二的内容</g-collapse-item>
            <g-collapse-item title="标题3" name="3">这里是标题三的内容</g-collapse-item>
            <g-collapse-item title="标题4" name="4">这里是标题四的内容</g-collapse-item>
        </g-collapse>
    </div>
</template>
<script>
  import Collapse from "../../../src/collapse";
  import CollapseItem from "../../../src/collapse-item";
  export default {
    components: {
      "g-collapse": Collapse,
      "g-collapse-item": CollapseItem,
    },
    data() {
      return {
        selectedTab: ["1"],
      };
    },
  };
</script>