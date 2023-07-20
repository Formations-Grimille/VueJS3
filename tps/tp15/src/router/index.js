import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import UsersView from '@/views/UsersView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
