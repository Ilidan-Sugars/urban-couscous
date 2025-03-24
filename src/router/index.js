import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('../views/CreateUserView.vue')

    },
    {
      path: '/dash-board',
      name: 'dash-board',
      component: () => import('../views/DashBoardView.vue')

    },
  ],
})

export default router
