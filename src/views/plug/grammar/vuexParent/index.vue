<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div class="parent">
        <h3>这里是父组件</h3>
        <button type="button" @click="clickHandler">修改自己文本</button>
        <button type="button" @click="clickHandler2">修改子组件文本</button>
        <div>Test: {{msg}}</div>
        <br/>
        <div>子组件传值: {{parentMsg}}</div>
        <button type="button" @click="changeChild">父组件改变子组件数据</button>
        <child ref="childModule" @showbox="toshow" :parentMsg="parentMsg"></child> //监听子组件触发的showbox事件,然后调用toshow方法
        <br/>
        
    </div>
</template>

<script>
import store from '../../../../store/store'
import Child from '../vuexChild/index.vue'
export default {
    data() {
      return {
        obj:{},
        parentMsg:'未更改'
      };
  },
  name: 'Parent',
  props: {

  },
  components:{
      'child': Child
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    msg(){
            return store.state.testMsg;
      }
  },
  created(){


  },
  methods: {
    // 生成侧边栏路由，格式: /a/b/c
      clickHandler(){
          store.commit('changeTestMsg', '父组件修改自己后的文本')
              },
      clickHandler2(){
          store.commit('changeChildText', '父组件修改子组件后的文本')
              },
      toshow(msg) {
        this.parentMsg = msg;
    },
    changeChild(){
        this.$refs.childModule.heiheihei("嘿嘿嘿");
    }
  },
  mounted: function(){
    console.log('sidebar routes: ', this.routes)

  },
  store
}
</script>

<style scoped>
 .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>