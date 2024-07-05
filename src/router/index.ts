import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BaseLayout',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'homeView',
          component: HomeView
        },
        {
          path: '/blog',
          name: 'blogView',
          component: () => import('../views/BlogView.vue')
        },
        {
          path: '/contact-us',
          name: 'contactView',
          component: () => import('../views/ContactView.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'AuthBase',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'AuthLoginView',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'AuthRegisterView',
          component: () => import('@/views/auth/RegisterView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
