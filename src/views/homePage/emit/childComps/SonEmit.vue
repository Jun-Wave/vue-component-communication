<template>
  <div>
    <button @click="send">触发父组件方法</button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created() {
    this.$on("defFunction",(data)=> {
      console.log("ddes")
      console.log(data);
    })
  },
  // 方法集合
  methods: {
    send() {
      /*
      data可是基本数据、或者对象
    */
      this.$emit("sendFatherData", "数据1231312");
    }
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
