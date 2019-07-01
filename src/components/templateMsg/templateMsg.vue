<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        props: {

        },
        data() {
            return {

            }
        },
        created(){
          this.$ajax.get('/apis/getTemplate')
          //成功返回
            .then(response=>{
              console.log(response)


            })
            //失败返回
            .catch(error=>{
              console.log(error);
            })
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
