import { createRouter, createWebHashHistory } from "vue-router"



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Home', component: () => import('@pages/HomePage.vue') },
        { path: '/panel', name: 'Panel', component: () => import('@pages/PanelPage.vue') },
        { path: '/auth', name: 'Auth', component: () => import('@pages/AuthPage.vue') },
        // { path: '/some', name: 'Some', component: () => import('@pages/SomePage.vue') },
    ],
})


export default router