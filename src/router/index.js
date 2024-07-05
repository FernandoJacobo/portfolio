import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () => import(/* webpackChunkName: "jobs" */ '../views/JobsView.vue')
    },
    {
        path: '/technologies',
        name: 'technologies',
        component: () => import(/* webpackChunkName: "technologies" */ '../views/TechnologiesView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;