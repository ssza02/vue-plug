<template>
  <div class="main">
    <div class="header" :class="searchBarFixed == true ? 'isFixed' :''" ref="header">

    </div>
    <div id="box"></div>
  </div>

</template>

<script>
    export default {
        props: {

        },
        data() {
            return {
              scroll:'',
              searchBarFixed:false
            }
        },
        methods: {
          menu() {
            this.scroll = document.body.scrollTop;
            console.log(this.scroll);
                      if(this.scroll>1000){
                        this.searchBarFixed = true;
                        console.log('大于1000了')
                      }else{
                        this.searchBarFixed = false;
                      }
          }
        },
      mounted(){
           window.addEventListener('scroll', this.menu);



//        this.$nextTick(()=>{
//          this.menu()
//        });
      }
    }
</script>

<style scoped>
  .header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 60px;
    background: #db806a;
    opacity: 0;
  }
  #box {
    width: 100%;
    height: 2000px;
  }
  .isFixed{
    opacity:1;
    transition: all 0.5s;
  }
</style>
