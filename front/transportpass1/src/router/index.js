import Vue from 'vue'
import VueRouter from 'vue-router'
//引入login
import Login from "../views/Login"
//引入main1，这是管理员的界面
import Main1 from "@/views/Main1";
//引入管理员和普通用户的子路由
import Manager from "@/views/User/Manager";
import GeneralUsers from "@/views/User/GeneralUsers";
//引入找不到的页面
import error from "@/views/error";


//使用vuerouter
Vue.use(VueRouter)

const routes = [
    {
        //登录页的路由
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        //main1页的路由
        path: '/main1/:name',
        name: 'Main1',
        component: Main1,
        children:[
            {
                //Manerger页的路由
                path: '/user/manager：id',
                name: 'Manager',
                component: Manager,
                props:true
            },
            {
                //GeneralUsers页的路由
                path: '/user/generalUsers',
                name: 'GeneralUsers',
                component: GeneralUsers
            },
            {
                path:'/goMain1/:name',
                redirect:'/main1/:name'
            }
        ]
    },
    {
        //error的路由
        path:'*',
        component: error
    }
    ]
const router = new VueRouter({
    routes,
    mode:'history'
    //mode可以改变是否存在#的情况，默认的模式是hash，改成history就不存在#
})
//暴露router的接口
export default router
