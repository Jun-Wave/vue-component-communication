<template>
  <div class="brother-two">
    从兄弟组件中获取到的数据：{{brotherData}}
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {
    brotherData: {
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
    this.$bus.$on("clickBorther2",(value)=> {
      this.printMessage(value);
    });
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
    printMessage(value) {
      alert(value+"触发兄弟组件的方法");
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */
.brother-two {
  max-width: 1000px;
  border: 1px gold solid;
}
</style>
