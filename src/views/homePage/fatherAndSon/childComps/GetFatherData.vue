<template>
    <div>
      <button @click="getFatherData">获取父组件的数据</button>
      <div>展示获取到值：<span>{{value}}</span></div>
    </div>
</template>

<script>

export default {
  name: 'GetFatherData',
  components: {},
  props: {},
  data () {
    return {
      value:"还没有获取"
    }
  },
  // 方法集合
  methods: {
    getFatherData() {
      this.value = this.$parent.giveData;
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */

</style>
