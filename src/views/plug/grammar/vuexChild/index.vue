<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div class="child">
        <h3>这里是子组件</h3>
        <div>childText: {{msg}}</div>
        <button type="button" @click="clickHandler">修改父组件文本</button>
        <button type="button" @click="clickHandler2">修改自己文本</button>
    </div>
</template>

<script>
import store from '../../../../store/store'
export default {
    data() {
      return {
        
      };
  },
  name: 'Child',
  props: {

  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    msg(){
        return store.state.childText;
    }
  },
  created(){


  },
  methods: {
    // 生成侧边栏路由，格式: /a/b/c
      clickHandler(){
                store.commit("changeTestMsg", "子组件修改父组件后的文本");
            },
      clickHandler2(){
                store.commit("changeChildText", "子组件修改自己后的文本");
            }
  },
  mounted: function(){
    console.log('sidebar routes: ', this.routes)
  },
  store
}
</script>

<style scoped>
   .child{
        background-color: palegreen;
        border:1px solid black;
        height:200px;
        margin:10px;
    }
</style>