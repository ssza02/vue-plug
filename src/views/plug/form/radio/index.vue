<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>

</template>

<script>
export default {
  name: 'radio',
  props: {

  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态

  },
  data () {
      return {
        radio: '1'
      };
  },
  methods: {
    // 生成侧边栏路由，格式: /a/b/c

  },
  mounted: function(){
    console.log('sidebar routes: ', this.routes)
  }
}
</script>

<style>
</style>