<template>
    <div class="multiple-component">
      <div class="g-title">多选，全选，反选</div>
      <div class="checkitem">
        <input type='checkbox' class='input-checkbox' v-model='checkedAllBtn' @click='checkedAll'>全选
      </div>
      <div v-for='(item,index) in checkboxData'>
        <input type='checkbox' name='checkboxinput' class='input-checkbox' v-model='item.isCheck' @click='checkedSingle(index)' value='item.id'>{{item.value}}
      </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
              checkboxData:[{
                id:'1',
                value:'苹果',
                isCheck:false
              },{
                id:'2',
                value:'荔枝',
                isCheck:false
              },{
                id:'3',
                value:'香蕉',
                isCheck:false
              },{
                id:'4',
                value:'火龙果',
                isCheck:false
              }],
              checkboxModel:[],
              checkedAllBtn:false
            }
        },
      watch: {//深度 watcher
        checkboxModel: {
          handler: function (val, oldVal) {
            if (this.checkboxModel.length === this.checkboxData.length) {
              this.checkedAllBtn=true;
            }else{
              this.checkedAllBtn=false;
            }
          },
          deep: true
        }
      },
        methods: {
          checkedAll: function() {
            var _this = this;

            if (_this.checkedAllBtn==false) {//实现全选
              _this.checkboxModel = [];
              _this.checkboxData.forEach(function(item) {
                _this.checkboxModel.push(item.id);
                item.isCheck=true;
              });
            }else{//取消全选
              _this.checkboxModel = [];
              _this.checkboxData.forEach(function(item) {
                item.isCheck=false;
              });
            }
          },
          checkedSingle:function (index) {
            if(this.checkboxData[index].isCheck==false){
              this.checkboxModel.push(this.checkboxData[index].id);
            }else {
              this.checkboxModel.pop();
            }
          }
        }
    }
</script>

<style scoped>
.input-checkbox{

}
</style>
