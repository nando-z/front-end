import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      Component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      Component: () => import('../views/AbortView.vue'),
    },
  ],
})

export default router
