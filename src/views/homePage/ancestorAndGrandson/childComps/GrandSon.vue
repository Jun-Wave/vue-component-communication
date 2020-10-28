<template>
  <div>
    <h3>GrandSon组件中</h3>
    来自祖先的数： {{fromAncestorData}}
    <br/>
    GrandSon中的$attrs为：{{$attrs}}
    <br/>
    <input v-model="value" type="text"/><button @click="giveAncestorData">点击我传递值给Ancestor</button>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {
    fromAncestorData: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      value: "暂无触发事件传值"
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {
    this.giveAncestorData();
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
    giveAncestorData() {
      this.$emit("getGrandSonData",this.value);
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */

</style>
