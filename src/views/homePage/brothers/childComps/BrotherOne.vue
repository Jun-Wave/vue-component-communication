<template>
  <div class="brother-one">
    <input v-model="value" type="text/">
    <button @click="giveFatherData">点击我将数据传递我的兄弟组件</button>
    <br>
    <br/>
    <button @click="clickBortherMethodByRef">通过parent和ref触发兄弟组件2的方法</button>
    <br>
    <br/>
    <button @click="clickBortherMethodByBus">通过事件总线触发兄弟组件2的方法</button>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      value: "暂无输入数据"
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {
    // 创建时将数据传递给兄弟组件2
    this.giveFatherData();
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
    giveFatherData() {
      this.$emit("getSonData",this.value);
    },
    clickBortherMethodByRef() {
      this.$parent.$refs.borther_b.printMessage("使用$parent.$refs");
    },
    clickBortherMethodByBus() {
      let data = 1;
      this.$bus.$emit("clickBorther2",data);
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */
.brother-one {
  max-width: 1000px;
  border: 1px blue solid;
}
</style>
