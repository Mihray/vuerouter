// const Home={template:<div>Home</div>}
// const About={template:<div>About</div>}
import HomeVue from '../components/HomeVue.Vue'

HomeVue.use(router)
const routes=[
    {
        path:'/',component:Home
    },
    {
        path:'/about',component:About
    }
]

const router=VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:routes
})

HomeVue.use(router)

// const app=Vue.createApp({})
// app.use(router)
// app.mount('#app')