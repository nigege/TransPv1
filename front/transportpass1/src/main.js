import Vue from 'vue'
import App from './App.vue'
//导入vuerouter
import VueRouter from 'vue-router'
//引入路由
import router from './router/index'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入axios
import axios from 'axios';
//引入状态管理的vuex
import Vuex from 'vuex'
//引入store这个全局的状态存储
import store from "@/store";


//使用一下vuerouter
Vue.use(VueRouter);
//使用elementui
Vue.use(ElementUI);
//声明使用axios
Vue.prototype.axios = axios;
//安装插件
Vue.use(Vuex)

Vue.config.productionTip = false

//路由跳转之前，每次跳转之前都会执行
router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('isLogin');
//注销
    if (to.path == '/logout') {
        //清空登录状态
        sessionStorage.clear();
        //跳转到登录界面
        next({path: '/login'})
    } else if (to.path == '/login') {
        //判断是否为空，不为空，跳转至首页
        if (isLogin != null) {
            next({path: '/main1'});
        }
    } else if (isLogin == null) {
        //判断是否为空，不为空，跳转至登录页
        next({path: '/login'});
    }
    next();
})

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
})
