<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
  },
  name: 'echars',
  props: {

  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态

  },
  created(){


  },
  methods: {
    // 生成侧边栏路由，格式: /a/b/c
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
  mounted: function(){
    console.log('sidebar routes: ', this.routes)
    this.drawLine();
  }
}
</script>

<style>
</style>