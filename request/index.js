// 项目主目录
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
    el:'#app',
    components:{App},
    template:"<App/>"
})