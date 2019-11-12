// 项目主目录
import Vue from 'vue/dist/vue.esm.js'
import ViewUI from 'view-design'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import 'view-design/dist/styles/iview.css'
import router from './router'

Vue.use(VueRouter)
Vue.prototype.$http = axios

Vue.use(ViewUI)

new Vue({
    el:'#app',
    router,
    components:{App},
    template:"<App/>"
})