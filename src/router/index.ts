import { createRouter, createWebHashHistory } from 'vue-router'
console.log('BASE_URL:', import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    { path: '/blog/:slug', component: () => import('@/pages/BlogDetailPage.vue') },
  ],
})

export default router
