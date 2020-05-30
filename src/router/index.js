import Vue from 'vue'
import VueRouter from 'vue-router'
import BlankPage from "../views/BlankPage";
import DashboardPage from "../views/DashboardPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DashboardPage
    },
    {
        path: '/dashboard',
        name: 'Home',
        component: DashboardPage
    },
    {
        path: '/cadastro/blank-page',
        name: 'BlankPage',
        component: BlankPage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
