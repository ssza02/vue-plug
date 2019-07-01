<template>
    <div class="pull-wrapper" ref="wrapper">
      <div>
        <div class="top-tip">
          <span class="refresh-hook" ref="refreshHook">刷新中...</span>
        </div>
        <ul class="content">
          <li class="item-style" v-for="item in data">{{item.name}}</li>
        </ul>
        <div class="bottom-tip">
          <span class="loading-hook" ref="loadingHook">加载中...</span>
        </div>
        <!--<div class="loading-wrapper"></div>-->
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        data: [
          {name : "测试商品1",
            num : 1,
            price : 10.0
          },
          {name : "测试商品2",
            num : 1,
            price : 20.0
          },
          {name : "测试商品3",
            num : 1,
            price : 30.0
          },
          {name: "测试商品4",
            num: 1,
            price: 40.0
          },
          {name : "测试商品5",
            num : 1,
            price : 10.0
          },
          {name : "测试商品6",
            num : 1,
            price : 20.0
          },
          {name : "测试商品7",
            num : 1,
            price : 30.0
          },
          {name: "测试商品8",
            num: 1,
            price: 40.0
          }
        ],
        pulldown: true
      }
        },
    created() {
//      this.loadData()
    },
    methods: {
      RefreshData() {
        const url = '/api/message';
        this.$http.get(url).then((res) => {
        const newData = res.data.data;
        this.data = newData.concat(this.data)   //concat连接数组
        })
      },
      loadData() {
        const url = '/api/message';
        this.$http.get(url).then((res) => {
          const newData = res.data.data;
          this.data = this.data.concat(newData)   //concat连接数组
        })
      }
    },
    mounted() {
//      在 Vue 中，初始化 BScroll 的最佳时机是 mouted 的 nextTick
      this.$nextTick(() => {
        if (!this.scroll) {     //以防刷新过程中下拉/上拉再次触发
          const options = {
            scrollY: true, // 因为scrollY默认为true，其实可以省略
          }
          //下拉刷新
          options.pullDownRefresh = {
            threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
            stop: 50 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
          }
          //上拉加载
          options.pullUpLoad = {
            threshold: -50, // 在上拉到超过底部 50px 时，触发 pullingUp 事件
            stop: 50
          }
          options.scrollbar = true  // fade 默认为 true，滚动条淡入淡出
          options.scrollbar = {     // 滚动条一直显示
            fade: false
          }
          this.scroll = new BScroll(this.$refs.wrapper,options,{
            //开启点击事件 默认为false
            click:true
          })
         }
        this.scroll.on('pullingDown', () => {
          this.RefreshData();
          this.$refs.refreshHook.style.display = 'block';
          setTimeout(()=>{
            this.scroll.finishPullDown();
            this.$refs.refreshHook.style.display = 'none';
            console.log('下拉刷新完成');
          },2000);
        })
        this.scroll.on('pullingUp', () => {
          this.loadData();
          this.$refs.loadingHook.style.display = 'block';
          setTimeout(()=>{
            this.scroll.finishPullUp();
            this.$refs.loadingHook.style.display = 'none';
            console.log('上啦加载完成');
          },2000);
        })
      })
    }
        }
  </script>


<style scoped>
  .pull-wrapper{
    position: relative;
    width: 600px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
  }
  .item-style{
    font-size: 20px;
    padding: 10px;
  }
  .refresh-hook{
    display: none;
  }
  .loading-hook{
    display: none;
  }
</style>
