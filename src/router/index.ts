import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    { path: '/login', component: () => import('@/views/login/index.vue') },
    { path: '/main', component: () => import('@/views/main/index.vue') },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/index.vue')
    }
  ]
})

export default router
