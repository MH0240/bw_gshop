import Vue from 'vue'
import app from './app'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
// 注册全局组件
Vue.component(Button.name, Button)

new Vue({
    el: '#app',
    router,
    store, // 使用上vuex
    render: h => h(app)
})
