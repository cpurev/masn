import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/service',
      name: 'Service',
      component: () => import('../views/Service.vue')
    },
    {
      path: '/training',
      name: 'Training',
      component: () => import('../views/Training.vue')
    },
    {
      path: '/consultancy',
      name: 'Consultancy',
      component: () => import('../views/Consultancy.vue')
    },
    {
      path: '/our-work',
      name: 'OurWork',
      component: () => import('../views/OurWork.vue')
    },
    {
      path: '/our-work',
      name: 'OurWork',
      component: () => import('../views/OurWork.vue')
    },
    {
      path: '/our-team',
      name: 'OurTeam',
      component: () => import('../views/OurTeam.vue')
    }
  ],
})

export default router
