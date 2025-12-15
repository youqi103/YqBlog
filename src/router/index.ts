import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/about',
      component: () => import('@/pages/AboutPage.vue'),
    },
    { path: '/blog', component: () => import('@/pages/BlogPage.vue') },
    { path: '/blog/:id', component: () => import('@/pages/BlogDetailPage.vue') },
  ],
})

export default router
