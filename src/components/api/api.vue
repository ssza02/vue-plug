<template>
    <div class="api-wrapper">
      <input type="button" class="btn" value="获取json数据" @click="getJson"></input>
      <div class="jsonInfo">{{jsonInfo}}</div>
    </div>
</template>

<script>

    export default {
        props: {},
        data() {
            return {
              jsonInfo:{}
            }
        },
        created(){

        },
        methods: {
          getJson:function () {
//            const url = 'api/users/getUserInfo';   /* 若为生产环境则用本地数据，若为发布环境则用在线api */
//            this.$http.get(url).then((response) => {
//              console.log(response);
//
//            });
            this.$ajax.get('/apis/users/getUserInfo')
            //成功返回
              .then(response=>{
                console.log(response);

              })
              //失败返回
              .catch(error=>{
                console.log(error);
              })


//            this.$http.jsonp('http://hq.sinajs.cn/list=fx_susdcad',
//              function(data) {
//                console.log(data)
//              },function(){
//              console.log("请求失败！！！")
//            });

          }
        }
    }
</script>

<style scoped>

</style>
