<template>
  <div class="bar">
    <div class="nav_warp_hook" ref="nav_warp_hook">
      头部固定
    </div>
    <p class="top_warp_hook" ref="top_warp_hook" style="height: 1000px">djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
      djslkdjaskldjklsjdlask<br/>
    </p>
  </div>

</template>

<script>
    export default {
        props: {},
        data() {
            return {}
        },
        methods: {
          fixedStatusFn(){
              let navHeight = this.$refs.nav_warp_hook.offsetHeight;
              let topHeight=this.$refs.top_warp_hook.offsetTop;
              let scrollT=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
              this.$refs.nav_warp_hook.style.position=scrollT + navHeight>topHeight?'fixed':'static';
              console.log('offsetTop:' + topHeight)
              console.log('scrollTop:' + scrollT)
          }
        },
        mounted(){
//          console.log(this.$refs.nav_warp_hook.offsetHeight)
          window.addEventListener('scroll',()=>{
//            this.$refs.nav_warp_hook.offsetHeight
            this.fixedStatusFn();

          })
        }
    }
</script>

<style scoped>
  .nav_warp_hook{
    position: static;
    top:0;
    left:0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background: rgba(1,93,170,0.8);
  }
</style>
