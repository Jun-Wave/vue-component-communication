<template>
    <div class="son-a">
      <h3>1.子组件渲染的时候-->父组件将值传到-->子组件(使用props)</h3>
      <h5>来自父组件的数据：<span>{{fatherData1}}</span></h5>
    </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {
    fatherData1: {
      type: String,
      default: ""
    }
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {

  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */
.son-a{
  max-width: 1000px;
  border: 1px red solid;
}
</style>
