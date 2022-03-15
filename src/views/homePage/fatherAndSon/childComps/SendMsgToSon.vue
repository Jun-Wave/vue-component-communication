<template>
  <div class="give-father-data">
    父组件传递过来的数据：<span>{{value}}</span>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      value: ""
    }
  },
  // 方法集合
  methods: {

  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */
.give-father-data{
  max-width: 1000px;
  border: 1px rgb(99, 16, 255) solid;
}
</style>
