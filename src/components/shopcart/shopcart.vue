  <template>
    <div class="cart-box-body">
    <table class="cart-table" style="width:100%;">
      <thead>
      <tr>
        <th>商品名称</th>
        <th>单价</th>
        <th>购买数量</th>
        <th>合计</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(goods,index) in goods_list">
        <td>{{ goods.name }}</td>
        <td>{{ goods.price }}</td>
        <td>
        <td>
          <input type="button" value="-" @click="reduceClick(index)"/>
          <!--<input type="text" size="5" v-model="goods.num" />-->
          <input type="text" size="5" :value="goods.num" v-on:blur="changeNumber(goods,$event)" />
          <input type="button" value="+" @click="addClick(index)"/>
        </td>
        <td>{{ goods.price * goods.num}}</td>
        <td>
          <a href="javascript:;" v-on:click="remove(goods,index)">删除</a>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      共{{ count }}件商品 购物车总金额：￥{{total}}元
    </div>
</div>
  </template>
  <!--<template v-else>-->
    <!--<div>购物车为空</div>-->
  <!--</template>-->


<script>
    export default {
        props: {},
        data() {
            return {
              goods_list: [
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
                }
              ]
            }
        },
        computed:{
          count : function(){
            var num = 0;
            for(var i in this.goods_list){
              num += parseInt(this.goods_list[i].num);
            }
            return num;
          },
          total : function(){
            var total = 0;
            for(var i in this.goods_list){
              total += this.goods_list[i].price * this.goods_list[i].num;
            }
            return total;
          }
        },
        methods: {
          changeNumber: function (goods, event) {
            var obj = event.target.value;
            goods.num = parseInt(obj);
          },
          remove: function (goods,index) {
            this.goods_list.splice(index,1);     //splice(从index项进行删除，删除1项)
//            this.goods_list.splice($.inArray(2, this.goods_list), 1);
          },
          reduceClick: function (index) {
            var currentItem = this.goods_list[index];
            if(currentItem.num == 0 ){
              return
            }else{
              this.goods_list[index].num--
            }

          },
          addClick: function (index) {
            this.goods_list[index].num++
          }
        }
    }
</script>

<style scoped>

</style>
