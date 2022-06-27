import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//全局对象，用于保存所有组件的公共数据，固定写法
const state = {
    user: {
        name: ''
    }
};
//用于监听state对象的值的最新状态（计算属性，相当是缓存），相当于就是一个get方法
const getters = {
    getUser(state) {
    return state.user;
    }
};
//唯一一个可以修改state值的方法（同步执行）
const mutations={
    updateUser(state,user){
        state.user=user;
    }
};
//异步执行mutation方法
const actions={
    asyncUpdateUser(context,user){
        context.commit("updateUser",user);
    }
};
//暴露出接口
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
