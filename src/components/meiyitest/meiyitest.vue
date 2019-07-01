<template>
    <div class="main">
      <a class="mulSel" href="javascript:;">
        <div class="selections">

          <span class="countrySelectDiv" v-for="country in countrySelectedList">{{country}}</span>
        </div>
      </a>
      <div class="input-wrapper">
        <ul>
          <li v-for="(item,index) in country">
            <!--<div class="country" :class='{"hasCheck":arrayCheck[index]}' @click="checks(index)">{{item.name}}</div>-->
            <div class="country" :class="{'selected':item.selectedStatus}" @click="checks(index,country)">{{item.name}}</div>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
  import Lib from "../../assets/js/Lib";
    export default {
        props: {

        },
        data() {
            return {
              country: [
                {
                  flag: "https://oss.meiyi.ai/upload/image/201707/e9b4d059-b5a0-4e39-b3c3-5a41f5dbe232.jpg",
                  id: 1,
                  name: "美国",
                  value: 2
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201707/9de126a8-fbf7-4e97-ad4f-ad388bd9fdbc.jpg",
                  id: 2,
                  name: "加拿大",
                  value: 4
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201707/0e8ade2a-de71-4f0d-9ce5-b348a76e0598.jpg",
                  id: 3,
                  name: "澳大利亚",
                  value: 5
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201707/252884fe-ef95-49e2-99b1-a8220fc76679.jpg",
                  id: 4,
                  name: "新西兰",
                  value: 7
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/fc3adbf0-5f87-4608-aee3-38711b610a76.jpg",
                  id: 5,
                  name: "西班牙",
                  value: 10
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/60f44c2b-58de-419a-8e19-900f9b7cbfdb.jpg",
                  id: 6,
                  name: "葡萄牙",
                  value: 9
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/722a7c7f-ae8b-41b5-8fc9-e403a0fa35da.jpg",
                  id: 7,
                  name: "爱尔兰",
                  value: 20
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/66d26e22-09dc-4a9f-b38c-f4ff16374a79.jpg",
                  id: 8,
                  name: "希腊",
                  value: 11
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/ab1cc5b5-7067-41c6-8c7e-e77edee33cab.jpg",
                  id: 9,
                  name: "圣基茨",
                  value: 14
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/f8438e6f-b8c0-4bef-9766-cad26fb28703.jpg",
                  id: 10,
                  name: "安提瓜",
                  value: 15
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/728f54b2-fcb4-445b-8dee-465c8c253894.jpg",
                  id: 11,
                  name: "圣卢西亚",
                  value: 18
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/ccca8b3b-a3aa-49be-b85a-21282088e9d0.jpg",
                  id: 12,
                  name: "多米尼克",
                  value: 16
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/84aecc16-0d16-4e8d-8f68-9001387a9168.jpg",
                  id: 13,
                  name: "格林纳达",
                  value: 17
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/f2b9bde9-4fe5-4316-a330-e9d5b080643e.jpg",
                  id: 14,
                  name: "瓦努阿图",
                  value: 8
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/a3189908-fd48-49ba-b71f-23b7edccd39a.jpg",
                  id: 15,
                  name: "塞浦路斯",
                  value: 13
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/c9799b6b-fef9-4a84-a87e-18e3d99ebfe9.jpg",
                  id: 16,
                  name: "马耳他",
                  value: 12
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/b3084fd5-889e-496b-b31b-67515d064a68.jpg",
                  id: 17,
                  name: "马来西亚",
                  value: 21
                },
                {
                  flag: "https://oss.meiyi.ai/upload/image/201801/7ecd7edd-a57f-4509-87a1-8a61dd8b30db.jpg",
                  id: 18,
                  name: "中国香港",
                  value: 22
                }
              ],
//              hasCheck:false,
              arrayCheck:[],
              selectCount:0
            }
        },
        created(){

        },
        computed:{
          countrySelectedList(){
           let countrys = this.arrayCheck
//            let selectCount = this.arrayCheck.length
            return countrys

//            let countryArr=[];
//            this.country.some(country=>{
//
//              if(country.selectedStatus===true){
//                countryArr.push(country.name);
//              }
//            });
//            if(countryArr.length===0){
//              return ['您向往哪个国家地区'];
//            }
//            return countryArr;

          }
        },
        methods: {

          checks:function (index) {
//          this.country[index].hasCheck === true ? false : true;
            this.country[index].selectedStatus = true;
            this.arrayCheck.push(this.country[index].name);
//            this.$set(selected,this.country[index].selectedStatus);
            this.country.map((item,index)=>{
              this.$set(item,item.selectedStatus);
            })
            console.log(this.arrayCheck)

          }
        },
      mounted(){
        let arrayCountry = this.country;
        arrayCountry.map(item=>{
          item.selectedStatus = false

        });




      }
    }
</script>

<style scoped>
  .main{
    overflow: hidden;
  }
.mulSel{
  display: inline-block;
  width: 200px;
  height:60px;
}
  .selections{
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  .input-wrapper{
    width: 500px;
  }
  .input-wrapper ul{
    display: flex;
    flex-wrap: wrap;

  }
  .input-wrapper ul li{
    flex: 1 0 auto;
  }
  .country{

    border: 1px solid #ccc;
    background: #fff;
    width: 100px;
    height: 40px;
    line-height: 40px;
  }
  .selected{border:1px solid red}
  .countrySelectDiv::after{
    content: ',';
  }
  .countrySelectDiv:last-child::after{
    content: '';
  }
</style>
