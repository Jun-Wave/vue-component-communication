<template>
  <div class="father-a">
    <h2>父组件</h2>
    <br />
    <br />
    <div class="son-a">
      <h2>1.1子组件中获取父组件数据</h2>
      <h3>子组件渲染的时候-->父组件将值传到-->子组件(使用props)</h3>
      <son-a :fatherData1="fatherData1"></son-a>
    </div>

    <br />
    <br />
    <div class="get-data-box">
      <h2>1.2子组件中获取父组件数据</h2>
      <h3>
        某个时间点击子组件-->子组件中获取父组件数据(子组件使用this.$parent)
      </h3>
      <get-father-data></get-father-data>
    </div>
    <br />
    <br />
    <div>
      <h2>2父组件给子组件发送数据</h2>
      <h3>父组件方法触发 --> 将值传递到子组件(使用this.$ref)</h3>
      <button @click="giveFatherData">点击我,将值传个子组件</button>
      <send-msg-to-son ref="give_son"></send-msg-to-son>
    </div>

    <br />
    <br />
    <div class="return-top-box">
      <h2>3点击子组件触发父组件方法</h2>
      <h3>
        在父组件监听点击整个子组件-->触发父组件方法(使用@click.native="父组件方法")
      </h3>
      <return-top @click.native="clickReturnTop"></return-top>
    </div>
    <br />
    <br />

    <div class="son-b-box">
      <h3>
        3. 父组件方法触发-->导致-->子组件方法触发(使用this.$ref.son.value)
      </h3>
      <button @click="sonbExecute">
        我是父组件的按钮,点击我执行子组件方法
      </button>
      <son-b ref="son_b" />
    </div>
    <br />
    <br />
    <div>
      <h3>
        3-4.
        子组件方法触发-->(触发父组件方法/将数据传递-->到父组件)【(使用this.$emit)】
      </h3>
      <div>
        子组件传过来的数据：
        <span>{{ sonData }}</span>
      </div>
      <son-to-father @getSonData="getSonData" />
    </div>

    <div>
      <h3>
        4.
        父组件方法触发-->(父组件获取子组件的值)【(父组件内使用this.$ref.son.value)】
      </h3>
      <div>跟父组件方法触发 --> 将值传递到子组件类似</div>
    </div>
  </div>
</template>

<script>
import SonA from "./childComps/SonA";
import GetFatherData from "./childComps/GetFatherData";
import SendMsgToSon from "./childComps/SendMsgToSon";
import SonB from "./childComps/SonB";
import ReturnTop from "./childComps/ReturnTop";
import SonToFather from "./childComps/SonToFather";
export default {
  name: "FatherA",
  components: {
    SonA,
    GetFatherData,
    SendMsgToSon,
    SonB,
    ReturnTop,
    SonToFather,
  },
  props: {},
  data() {
    return {
      fatherData1: "the message of fatherA",
      sonData: "",
      giveData: "给子组件的数据123",
    };
  },
  // 方法集合
  methods: {
    clickReturnTop() {
      alert("返回顶部按钮组件被点击！");
    },
    sonbExecute() {
      this.$refs.son_b.sonBMethod();
    },
    getSonData(sonData) {
      this.sonData = sonData;
    },
    giveFatherData() {
      this.$refs.give_son.value = this.giveData;
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.son-a {
  max-width: 1000px;
  border: 1px red solid;
}
.father-a {
  border: 1px #999 solid;
  margin-bottom: 100px;
}
.return-top-box {
  max-width: 1000px;
  border: 1px greenyellow solid;
}
.son-b-box {
  max-width: 1000px;
  border: 1px rgb(67, 147, 201) solid;
}
.get-data-box {
  max-width: 1000px;
  border: 1px rgb(8, 113, 121) solid;
}
</style>
