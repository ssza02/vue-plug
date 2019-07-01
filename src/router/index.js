import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
// import axios from 'axios'
import Login from '@/views/TheLogin'
import Container from '@/container/Container'
import FisetLevel from '@/views/dashboard'
import SecendLevel from '@/views/form'
//form
import Radio from '@/views/plug/form/radio'
import Checkbox from '@/views/plug/form/checkbox'
import Sku from '@/views/plug/form/sku'
//data
// import Data from '@/views/data'
//notice
// import Notice from '@/views/notice'
//navigation
// import Navigation from '@/views/navigation'
//navigation
// import Other from '@/views/other'
//常用语法
import SetDate from '@/views/plug/grammar/setDate'
import Vuex from '@/views/plug/grammar/vuexParent'
import Echars from '@/views/plug/grammar/echars'

import Article from '@/views/article'
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图插件
import HelloWorld from '@/components/HelloWorld'
import selection from '@/components/selection/selection'
import multiple from '@/components/multiple/multiple'
import slide from '@/components/slide/slide'
import goods from '@/components/goods/goods'
import login from '@/components/login/login'
import regedit from '@/components/regedit/regedit'
import layoutLR from '@/components/layout/layoutLR'
import DetailAnaPage from '@/components/layout/detail/analysis'
import DetailCouPage from '@/components/layout/detail/count'
import DetailForPage from '@/components/layout/detail/forecast'
import DetailPubPage from '@/components/layout/detail/publish'
import shopcart from '@/components/shopcart/shopcart'
import pullrefresh from '@/components/pullrefresh/pullrefresh'
import star from '@/components/star/star'
import api from '@/components/api/api'
import scroll from '@/components/betterscroll/betterscrollX'
import weixin from '@/components/weixin/weixin'
import weixinSuccess from '@/components/weixinSuccess/weixinSuccess'
import templateMsg from '@/components/templateMsg/templateMsg'
import scrolltop from '@/components/scrolltop/scrolltop'
import multselection from '@/components/multselection/multselection'
import checklist from '@/components/checklist/checklist'
import topFixedorStatic from '@/components/topFixedorStatic/topFixedorStatic'
import meiyitest from '@/components/meiyitest/meiyitest'
import richTextEditor from '@/components/richTextEditor/richTextEditor'
import editor from '@/components/ueditor/editor'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(vueResource)
    // Vue.use(axios)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        // {
        //     path: '/',
        //     redirect: '/dashboard',
        //     name: 'Container',
        //     component: Container,
        //     children: [{
        //             path: 'dashboard',
        //             name: '各类组件',
        //             component: Dashboard,
        //             children: [{
        //                 path: 'form',
        //                 name: 'Form',
        //                 component: Dashboard,
        //                 children: [
        //                     { path: 'radio', name: '单选框', component: Radio },
        //                     { path: 'checkbox', name: '多选框', component: Checkbox },
        //                 ]
        //             }, ]
        //         },
        //         { path: 'article', name: '文章', component: Article, },
        //     ]
        // },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Container',
            component: Container,
            children: [{
                    path: 'dashboard',
                    name: '各类组件',
                    component: FisetLevel,
                    children: [{
                            path: 'form',
                            name: 'Form',
                            component: SecendLevel,
                            children: [
                                { path: 'radio', name: '单选框', component: Radio, },
                                { path: 'checkbox', name: '多选框', component: Checkbox, },
                                { path: 'sku', name: '商品匹配', component: Sku, },
                            ]
                        },
                        {
                            path: 'data',
                            name: 'Data',
                            component: SecendLevel,
                        },
                        {
                            path: 'notice',
                            name: 'Notice',
                            component: SecendLevel,
                        },
                        {
                            path: 'navigation',
                            name: 'Navigation',
                            component: SecendLevel,
                        },
                        {
                            path: 'other',
                            name: 'Other',
                            component: SecendLevel,
                        },
                        {
                            path: 'grammar',
                            name: '语法使用',
                            component: SecendLevel,
                            children: [
                                { path: 'set', name: '$set', component: SetDate, },
                                { path: 'vuex', name: 'vuex,props,$emit', component: Vuex, },
                                { path: 'echars', name: 'Echars', component: Echars, },
                            ]
                        },
                    ]
                },

            ]
        }

        // {
        //     path: '/selection',
        //     name: 'selection',
        //     component: selection
        // },
        // {
        //     path: '/multiple',
        //     name: 'multiple',
        //     component: multiple
        // },
        // {
        //     path: '/slide',
        //     name: 'slide',
        //     component: slide
        // },
        // {
        //     path: '/goods',
        //     name: 'goods',
        //     component: goods
        // },
        // {
        //     path: '/regedit',
        //     name: 'regedit',
        //     component: regedit
        // },
        // {
        //     path: '/layoutLR',
        //     name: 'layoutLR',
        //     component: layoutLR,
        //     redirect: '/layoutLR/analysis',
        //     children: [{
        //             path: 'analysis',
        //             component: DetailAnaPage
        //         },
        //         {
        //             path: 'count',
        //             component: DetailCouPage
        //         },
        //         {
        //             path: 'forecast',
        //             component: DetailForPage
        //         },
        //         {
        //             path: 'publish',
        //             component: DetailPubPage
        //         }
        //     ]
        // },
        // {
        //     path: '/shopcart',
        //     name: 'shopcart',
        //     component: shopcart
        // },
        // {
        //     path: '/pullrefresh',
        //     name: 'pullrefresh',
        //     component: pullrefresh
        // },
        // {
        //     path: '/star',
        //     name: 'star',
        //     component: star
        // },
        // {
        //     path: '/api',
        //     name: 'api',
        //     component: api
        // },
        // {
        //     path: '/scroll',
        //     name: 'scroll',
        //     component: scroll
        // },
        // {
        //     path: '/weixin',
        //     name: 'weixin',
        //     component: weixin
        // },
        // {
        //     path: '/weixinSuccess',
        //     name: 'weixinSuccess',
        //     component: weixinSuccess
        // },
        // {
        //     path: '/templateMsg',
        //     name: 'templateMsg',
        //     component: templateMsg
        // },
        // {
        //     path: '/scrolltop',
        //     name: 'scrolltop',
        //     component: scrolltop
        // },
        // {
        //     path: '/multselection',
        //     name: 'multselection',
        //     component: multselection
        // },
        // {
        //     path: '/checklist',
        //     name: 'checklist',
        //     component: checklist
        // },
        // {
        //     path: '/topFixedorStatic',
        //     name: 'topFixedorStatic',
        //     component: topFixedorStatic
        // },
        // {
        //     path: '/meiyitest',
        //     name: 'meiyitest',
        //     component: meiyitest
        // },
        // {
        //     path: '/richTextEditor',
        //     name: 'richTextEditor',
        //     component: richTextEditor
        // },
        // {
        //     path: '/editor',
        //     name: 'editor',
        //     component: editor
        // }

    ]
})