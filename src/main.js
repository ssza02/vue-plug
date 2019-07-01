// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vuex from 'Vuex'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import ElementUI from 'element-ui'
import echarts from 'echarts'
// 引入vuex
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
// import Mint from 'mint-ui'

// Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(router)
Vue.use(VueJsonp)
Vue.config.productionTip = false

//将 axios 改写为 Vue 的原型属性，解决vue文件没法访问axios的问题。vue文件中直接可以使用this.$ajax做请求操作了
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})