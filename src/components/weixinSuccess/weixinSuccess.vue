<template>
    <div class="weixin-wrapper">
      <div class="">获取微信授权成功</div>
      <div class="infos">
        <div class="name">{{info.nickname}}</div>
        <div class="sex">{{sex}}</div>
        <div class="city">{{info.city}}</div>
        <div class="country">{{info.country}}</div>
        <div class="img">
          <img :src="info.headimgurl" />
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
              info:''

            }
        },
        computed:{
          sex:function () {
            let sign = this.info.sex;
            let sex = '';
            if(sign===1){
              sex = '男'
            }else{
              sex = '女'
            }
            return sex
          }
        },
        created(){
          this.$ajax.get('/apis/userInfo')
        //成功返回
          .then(response=>{
            console.log(response)
           this.info =response.data;

          })
          //失败返回
          .catch(error=>{
            console.log(error);
          })
        }
    }
</script>

<style scoped>

</style>
