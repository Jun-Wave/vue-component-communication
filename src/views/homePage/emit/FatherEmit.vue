<template>
  <div>
    <!--v-on:sendFatherData="getSonData"的语法糖-->
    <son-emit @sendFatherData="getSonData"/>
    <button @click="sendDataToSon">发送数据给Son</button>
  </div>
</template>

<script>
import SonEmit from "./childComps/SonEmit.vue"
export default {
  name: '',
  components: {
    SonEmit
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {
    
  },
  // 方法集合
  methods: {
    /**
     * 定义事件
     */
    getSonData(sonData) {
      console.log(sonData);
    },
    sendDataToSon() {
      console.log("123123");
      this.$emit("defFunction","defFunction");
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */

</style>
