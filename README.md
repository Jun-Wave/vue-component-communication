##### Vue2.x 组件间通信方式(9种)

###### 1. props父传子

[props](https://cn.vuejs.org/v2/guide/components-props.html#ad)使子组件可读取父组件的数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028194231565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkxNTQxOQ==,size_16,color_FFFFFF,t_70#pic_center)

###### 2. emit子传父 

[vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit)触发方法/发送数据

1. 父组件

   ```javascript
   <!--v-on:sendFatherData="getSonData"的语法糖-->
   <son @sendFatherData="getSonData"/>
   /**
   * 定义事件
   */
   getSonData(sonData) {
      console.log(sonData);
   }
   ```

   

2. 子组件

   ```javascript
   <button @click="send">触发父组件方法</button>
   send() {
     /*
        参数1:定义函数名
        参数2：数据 基本数据或者对象
     */
     this.$emit("sendFatherData", "数据1231312");
   }
   ```

   

###### 3. bus公共事件总线 

- [vm.$on](https://cn.vuejs.org/v2/api/#vm-on)定义方法/被触发的方法/接收数据
- [vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit)触发方法/发送数据

1. 在main.js给当前vue绑定一个vue实例

   ```javascript
   Vue.prototype.$bus = new Vue();
   ```

2. 组件A定义函数

   ```javascript
   created(){
      this.$bus.$on("defFunction",data=>{
          console.log(data);
      })
   }
   ```

3. 组件B触发函数

   ```javascript
   <button @click="clickMethodByBus">通过事件总线触发方法</button>
   clickMethodByBus() {
         let data = "基本数据类型、对象";//传递过程不会转换数据类型
         this.$bus.$emit("defFunction",data);
   }
   ```

   

###### 4. $parent

- [vm.$parent](https://cn.vuejs.org/v2/api/#vm-parent)
- [vm.$root](https://cn.vuejs.org/v2/api/#vm-root)

```javascript
//读取父数据、调用父方法
this.$parent.xxx
```

###### 5. ref 和 refs

- [vm.$refs](https://cn.vuejs.org/v2/api/#vm-refs)

```javascript
//父组件
<son ref="son1"/>
//读取子数据、调用子方法
this.$refs.son1.xxx
```

###### 6. Storage

[Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

```javascript
localStorage.setItem('key', 'vaule');
localStorage.getItem('key');
localStorage.removeItem('key');
// 移除所有
localStorage.clear();
```

###### 7. Vuex

[Vuex](https://vuex.vuejs.org/zh/guide/)

index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建一个新的 store 实例
export default new Vuex.Store({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state,num) {
      state.count+=num;
    }
  }
})
```

使用vuex

```javascript
methods: {
  increment() {
    //读取store数据this.$store.state.xxx
    console.log(this.$store.state.count);
    //修改store数据,参数2 data可以为任意数据类型、对象
    this.$store.commit('increment',data)
  }
}
```

###### 8. provide/inject 

- [provide / inject](https://cn.vuejs.org/v2/api/#provide-inject)

```javascript
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 数据'foo'
var Child = {
  inject: ['foo'],
  created () {
    //读取数据foo数据
    console.log(this.foo) // => "bar"
  }
  // ...
}
```



###### 9. $attrs/$listeners

- [vm.$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
- [vm.$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)

1. 父组件

   ```javascript
   <!--v-on:sendFatherData="getSonData"的语法糖-->
   <son @sendFatherData="getSonData" :fatherData="fatherData"/>
   
   data() {
       return {
           fatherData: "父数据"
       }
   }
   methods: {
       /**
   	* 定义事件
   	*/
   	getSonData(sonData) {
      		console.log(sonData);
   	}
   }
   ```

2. 子组件

   ```javascript
   <sun v-bind="$attrs" v-on="$listeners"/>
   ```

3. 孙组件

   ```javascript
   <button @click="send">触发父组件方法</button>
   props: {
       fatherData: {
         type: String,
         default: ""
       }
    },
   send() {
     /*
        参数1:定义函数名
        参数2：数据 基本数据或者对象
     */
     this.$emit("sendFatherData", "数据1231312");
   }
   ```





### 常见场景

####  父子组件通信

#####  (1) 子组件渲染的时候-->父组件将值传到-->子组件(使用props)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028194231565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkxNTQxOQ==,size_16,color_FFFFFF,t_70#pic_center)

#####  (2) 某个时间子组件触发方法A-->子组件中获取父组件数据(使用this.$parent)
某个时间可以是创建子组件的时候，如果是创建子组件的时候，将方法A放在子组件的create函数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028194455190.png#pic_center)

#####  (3) 父组件方法触发 --> 将父组件的值传递到子组件(使用this.$ref)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028195743937.png#pic_center)


#####  (4) 父组件方法触发-->导致-->子组件方法触发(使用this.$ref)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028195350128.png#pic_center)

#####  (5) 子组件方法触发-->(触发父组件方法/将数据传递-->到父组件)【(使用this.$emit)】

```javascript
sendToFather() {
      this.$emit("getSonData",this.value)
 }
```

##### (6)父组件方法触发-->(父组件获取子组件的值)【(使用this.$ref)】
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020102819534471.png#pic_center)

#### 2. 兄弟组件通信
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028200201172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkxNTQxOQ==,size_16,color_FFFFFF,t_70#pic_center)

##### (1)将B的数据传递给C
###### (a) B组件主动给(给的时间由可以放在生命周期函数或者绑定鼠标事件上决定)
1. B组件-->this.$emit-->A组件-->props-->C组件
2. B组件

```javascript
this.$parent.$refs.son_c.value = this.sonBValue
```

###### (b) C组件主动获取

```javascript
this.sonBValue = this.$parent.$refs.son_c.value
```

##### (2)事件总线
###### (a) 在main.js给当前vue绑定一个vue实例)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201028201046971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkxNTQxOQ==,size_16,color_FFFFFF,t_70#pic_center)
###### (b) B组件内定义事件

```html
<button @click="clickBortherMethodByBus">通过事件总线触发兄弟组件C的方法/或者传值</button>
```

```javascript
clickBortherMethodByBus() {
      this.$bus.$emit("clickBorther2","使用事件总线");
    }
```
######  (c\) C组件内监听事件
```javascript
mounted () {
    this.$bus.$on("clickBorther2",(value)=> {
      this.sonCValue = value;
    });
  }
```

#### 3. 祖孙组件通信
![](https://img-blog.csdnimg.cn/20201028202832160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDkxNTQxOQ==,size_16,color_FFFFFF,t_70#pic_center)

##### (1)使用props和\$emit可以使用v-bind="\$attrs"和v-on="\$listeners"，子组件中可以之间传递，不用在子组件中接收一次
```html
<grand-son v-bind="$attrs" v-on="$listeners"></grand-son>
```
##### (2)使用\$refs和\$parents
##### (3)使用事件总线
#### 4. 非祖孙组件
##### (1)使用vuex（未完善）
##### (2)使用事件总线（未完善）



##### 例子：[github链接](https://github.com/jushou-junbao/vue-component-communication)