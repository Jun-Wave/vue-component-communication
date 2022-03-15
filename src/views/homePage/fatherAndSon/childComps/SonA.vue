<template>
  <h5>
    来自父组件的数据：<span>{{ fatherData1 }}</span>
  </h5>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    fatherData1: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
