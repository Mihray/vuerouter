
import HomeVue from '../components/HomeVue'
import LoginVue from '../components/LoginVue'
// import {createRouter, createWebHistory} from 'vue-router'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
    {
        path:'/',component:HomeVue
    },
    {
        path:'/LoginVue',component:LoginVue
    }
]
// export default createRouter({
//     history: createWebHistory(),
//     routes
// })

const router=VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:routes
})
HomeVue.use(router)

