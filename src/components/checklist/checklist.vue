<template>
    <div class="">
      <mt-checklist
        title="复选框列表"
        v-model="value"
        :options="options">
      </mt-checklist>
    </div>
</template>

<script>

    export default {
        props: {

        },
        data() {
            return {
              value:[],
              //checklist设置
              options : [
                {
                  label: '选项A',
                  value: 'A',
                  disabled: true  //可以禁用选项
                  },
                {
                  label: '选项B',
                  value: 'B',
                  disabled: true
                },
                {
                  label: '选项C',
                  value: 'C'
                },
                {
                  label: '选项D',
                  value: 'D'
                }]
            }
        },
        methods: {

        },
      computed:{

      },
      mounted(){
        this.options.map((v,k)=>{
          console.log('v:'+v);
          console.log('k:'+k);
        })
      }
    }
</script>

<style scoped>

</style>
