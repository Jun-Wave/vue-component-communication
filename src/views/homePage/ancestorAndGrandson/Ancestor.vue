<template>
  <div>
    <h3>Ancestor组件内(使用v-bind="$attrs"和v-on="$listeners")</h3>
    <div>来自GrandSon的数据：{{fromGrandSonData}}</div>
    <father-c 
      :fromAncestorData="ancestorData1" 
      :ancestorData2="ancestorData2" 
      :ancestorData3="ancestorData3"
      @getGrandSonData="getGrandSonData"
      ></father-c>
    <hr/>
    <h3>Ancestor组件-->某个时间在Ancestor组件内触发方法-->获取GrandSon组件的值</h3>
    <div>Ancestor组件内使用this.$ref/事件总线</div>

    <h3>GrandSon组件-->某个时间在GrandSon组件内触发方法-->传值给Ancestor组件</h3>
    <div>GrandSon组件内使用this.$emit/this.$parent/事件总线</div>

    <hr/>
    <h3>Ancestor组件-->某个时间在Ancestor组件内触发方法-->触发GrandSon组件的方法</h3>
    <div>Ancestor组件内使用this.$ref/事件总线</div>

    <h3>GrandSon组件-->某个时间在GrandSon组件内触发方法-->触发Ancestor组件的方法</h3>
    <div>GrandSon组件内使用this.$emit/this.$parent/事件总线</div>
  </div>
</template>

<script>
import FatherC from "./childComps/FatherC"
export default {
  name: 'Ancestor',
  components: {
    FatherC
  },
  props: {},
  data () {
    return {
      ancestorData1: "传递给GrandSon组件数据",
      ancestorData2: "传递给Father组件数据",
      ancestorData3: "传递给Sonc组件的数据",
      fromGrandSonData: ""
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
    getGrandSonData(value) {
      this.fromGrandSonData = value;
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */

</style>
