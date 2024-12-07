import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: () => import('@/views/EnterAcc.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import ('@/views/BlogView.vue')
    },
    {
      path: '/product/:id',
      name: 'details',
      component: () => import ('@/views/ProductDetails.vue'),
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
