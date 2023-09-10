import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../pages/ChatsView.vue')
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: () => import('../pages/ChatView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../pages/SignupView.vue')
    }
  ]
})

export default router
