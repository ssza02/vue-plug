<template>
    <div class="weixin-wrapper">
      <div class="">获取微信授权</div>
      <div class="infos"></div>
      <input type="button" value="微信授权" @click="linkTo"/>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
              datas:{}
            }
        },
        methods: {
          linkTo(){
            this.$ajax.get('/apis/accredit')
            //成功返回
              .then(response=>{
                console.log(response)
                window.location.href=response.data;

              })
              //失败返回
              .catch(error=>{
                console.log(error);
              })
          }
        }
    }
</script>

<style scoped>


</style>
