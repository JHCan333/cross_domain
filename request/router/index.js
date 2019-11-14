import VueRouter from 'vue-router'
import menu from './menu'

const routes = []
menu.map((seg)=>{
    if(!!seg.children && seg.children.length > 0){
        seg.children.map((seg2)=>{
            routes.push({path: `/${seg2.name}`, name: seg2.name, component: () => import(`@/page/${seg.name}/${seg2.name}.vue`)})
        })
    } else {
        routes.push({path: `/${seg.name}`, name: seg.name, component: () => import(`@/page/${seg.name}.vue`)})
    }
})

routes.unshift({path: '/', name: '/', redirect: 'normal'})

console.log('routes',routes)

export default new VueRouter({routes})