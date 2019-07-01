<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple  grid-title">款式：</div>
        </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
             <template v-for="(item,index) in data">
              <el-button v-if="item.canBuy" :type='currentIndex===index?"primary":""' @click="toClick(index)">{{item.prodect}}</el-button>
              <el-button v-else :type='currentIndex===index?"primary":""' @click="toClick(index)" disabled>{{item.prodect}}</el-button>
            </template>
        </div>
      </el-col>
    </el-row>
    <br/>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple grid-title">大小：</div>
        </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <!-- <template v-for="(item,index) in data">
            <el-button  @click="toClick(index)">{{item.size}}</el-button>
          </template> -->
          <template v-for="(value,key,index) in data[currentIndex].size">
            <el-button v-if="value===0" :type='sizeCurrentIndex===index?"primary":""'  @click="toClickSize(value,key,index)" disabled>{{key}}:{{value}}</el-button>
            <el-button v-else :type='sizeCurrentIndex===index?"primary":""' @click="toClickSize(value,key,index)">{{key}}:{{value}}</el-button>
          </template>
          
        </div>
      </el-col>
    </el-row>

    
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        data:'',
        currentIndex:0,
        current:true,
        sizeCurrentIndex:'',
      };
  },
  name: 'SidebarItem',
  props: {

  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态

  },
  methods: {
    getData(){
          var Mock = require('mockjs')
          var data = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|10': [
                {
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                  'id|+1': 1,
                  'prodect':'@cname',
                  'size': {
                      // large:function(){
                      // //生成1-3随机整数
                      // let rand_num = parseInt(Math.random()*3,10)+1;
                      // let size = '';
                      // if(rand_num == 1){
                      //   size = 'S'
                      // }
                      // if(rand_num == 2){
                      //   size = 'M'
                      // }
                      // if(rand_num == 3){
                      //   size = 'L'
                      // }
                      // return size
                      // },
                      'S|0-10':1,
                      'M|0-10':1,
                      'L|0-10':1
                    }
                }
              ]
          });
    // 输出结果
    console.log(data)
    this.data = data.list;
    this.data.map((item,index)=>{
      item.canBuy = true;
    });
    // console.log(this.data);
    },
    toClick(index){
      this.currentIndex = index;
    },
    toClickSize(value,key,index){
      this.sizeCurrentIndex = index;
      this.loopProduceNum(value,key);
    },
    loopProduceNum(value,key){
      let size = key;
      console.log(size);
      this.data.map((item,index)=>{
        item.canBuy = true;
        if(item.size[key] === 0){
          item.canBuy = false;
        }
      });
      
    },
    // 生成侧边栏路由，格式: /a/b/c
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  },
  created(){
    this.getData();

//     var obj = {  
//     w: "wen",  
//     j: "jian",  
//     b: "bao"  
// }  
//     for(var v in obj){  
//       // document.write(obj[v])+"<br/>";  
//       console.log('v:'+obj[v]);
      
//     }  
  },
  mounted: function(){
    console.log('sidebar routes: ', this.routes)
  }
}
</script>

<style>
  .grid-title{
    margin-top: 20px;
  }
</style>