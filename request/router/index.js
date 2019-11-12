import VueRouter from 'vue-router'
import menu from './menu'

// CORS 跨域
const CORS = () => import('@/page/cors.vue')
// JSONP 跨域
const Jsonp = () => import('@/page/jsonp.vue')
// websocket 跨域
const WebSocket = () => import('@/page/webSocket.vue')
// 普通情况，不跨域
const Normal = () => import('@/page/normal.vue')

const routes = menu.map((seg)=>{
    return {path: `/${seg.name}`, name: seg.name, component: () => import(`@/page/${seg.name}.vue`)}
})

routes.unshift({path: '/', name: '/', redirect: 'normal'})

console.log('routes',routes)

export default new VueRouter({routes})