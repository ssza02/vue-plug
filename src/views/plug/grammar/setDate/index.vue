<template>
  <!-- 如果当前 subroute 有子节点 -->
  <div>$set后值为：{{obj.a}}</div>
</template>

<script>
export default {
    data() {
      return {
        obj:{}
      };
  },
  name: 'SidebarItem',
  props: {

  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态

  },
  created(){
    //语法糖[vm.$set( target, key, value )]
     var i=0;
     i++;
    this.$set(this.obj,'a',i)

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