<template>
  <!-- <div class="plug-list"> -->
    <!-- <ul>
      <li><router-link :to="{path: '/selection'}">选择</router-link></li>
      <li><router-link :to="{path: '/multiple'}">多选，全选，反选</router-link></li>
      <li><router-link :to="{path: '/slide'}">轮播图</router-link></li>
      <li><router-link :to="{path: '/goods'}">侧边栏滑动</router-link></li>
      <li><router-link :to="{path: '/login'}">登陆及表单验证</router-link></li>
      <li><router-link :to="{path: '/regedit'}">注册及表单验证</router-link></li>
      <li><router-link :to="{path: '/layoutLR'}">左右布局</router-link></li>
      <li><router-link :to="{path: '/shopcart'}">购物车</router-link></li>
      <li><router-link :to="{path: '/pullrefresh'}">上拉加载下拉刷新</router-link></li>
      <li><router-link :to="{path: '/star'}">星级评价</router-link></li>
      <li><router-link :to="{path: '/api'}">页面请求get/post</router-link></li>
      <li><router-link :to="{path: '/scroll'}">横向滚动</router-link></li>
      <li><router-link :to="{path: '/weixin'}">微信授权</router-link></li>
      <li><router-link :to="{path: '/templateMsg'}">模板消息</router-link></li>
      <li><router-link :to="{path: '/scrolltop'}">滚动动态监听离头部的高度</router-link></li>
      <li><router-link :to="{path: '/multselection'}">多级下拉</router-link></li>
      <li><router-link :to="{path: '/checklist'}">选择框</router-link></li>
      <li><router-link :to="{path: '/topFixedorStatic'}">上下滚动头部导航定位变化</router-link></li>
      <li><router-link :to="{path: '/meiyitest'}">meiyitest测试数据</router-link></li>
      <li><router-link :to="{path: '/richTextEditor'}">富文本编辑器richTextEditor</router-link></li>
      <li><router-link :to="{path: '/editor'}">富文本编辑器uEditor</router-link></li>
    </ul> -->
  <!-- </div> -->
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content{
  width: 500px;
  height:500px;
}
  .plug-list li{
    display: block;
    padding: 10px;
  } */
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
