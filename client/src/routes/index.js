import { createRouter, createWebHashHistory } from "vue-router"



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Home', component: () => import('@pages/HomePage.vue') },
        { path: '/donations', name: 'Donations', component: () => import('@pages/DonationsPage.vue') },
        { path: '/donations/free-charity', name: 'FreeCharity', component: () => import('@pages/FreeCharityPage.vue') },
        { path: '/donations/angel', name: 'Angel', component: () => import('@pages/AngelPage.vue') },
        // { path: '/some', name: 'Some', component: () => import('@pages/SomePage.vue') },
    ],
})


export default router