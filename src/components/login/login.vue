<!--参考git地址-->
<!--https://github.com/liuyinglong/verify-->
<!--<template>-->
    <!--<div class="login-wrapper">-->
      <!--<div class="user-name">-->
        <!--<input placeholder="请输入用户名" v-model="userName"/>-->
        <!--{{userName}}-->
      <!--</div>-->
      <!--<div class="user-pwd">-->
        <!--<input placeholder="密码"/>-->
      <!--</div>-->
      <!--<div class="login-btn">-->
        <!--<input type="button" value="登陆"/>-->
      <!--</div>-->
    <!--</div>-->
<!--</template>-->


<template>
  <div class="input-box clearFix">
    <div>
      <input v-model="userName" v-verify="userName" placeholder="用户名"/>
      <label class="fl" v-remind="userName"></label>
    </div>
    <div>
      <input type="text" class="phoneIcon fl" placeholder="密码" v-model="userPwd" v-verify="userPwd">
      <label class="fl" v-remind="userPwd"></label>
    </div>
    <!--<div>-->
      <!--<input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">-->
      <!--<label class="fl" v-remind="regInfo.phone"></label>-->
    <!--</div>-->
    <button v-on:click="submit">登录</button>
    <div>
      <span>没有账号？</span><router-link to="/regedit" tag="a" active-class="active">马上注册</router-link>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import verify from "vue-verify-plugin";
//  自定义验证规则
  var myRules={
    noEmpty:{
      test:function(val){
        if(val.length==0) {
          return false    //执行下面message属性的内容（用户名不能为空）
        }
        return true;
      },
      message:"用户名不能为空"
    },
    noSurpass:{
      test:function(val){
        if(val.length>10) {
          return false    //执行下面message属性的内容（用户名不能为空）
        }
        return true;
      },
      message:"最大不能超过10字符"
    }
  };

  Vue.use(verify,{
    blur:true,
    rules:myRules
  });



  export default {
    name: 'app',
    data () {
      return {
        userName:"",
        userPwd:"",
        regInfo: {
          phone: ""
        }
      }
    },
    verify: {
      userName:["noEmpty","noSurpass"],
      userPwd:["required",
                {
                  minLength:6,
                  message: "密码不得小于6位"
                }
      ],
      regInfo: {
        phone: ["required","mobile"]
      }
    },
    methods:{
      submit: function () {
        console.log(this.$verify.check());
      }
    }
  }
</script>

<style scoped>

</style>
