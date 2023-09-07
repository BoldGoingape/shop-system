import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Attrs/attrsListen.vue'),
    },
    {
      path: '/ref-parent',
      name: 'ref',
      component: () => import('../views/ref-childre/refChildren.vue'),
    },
    {
      path: '/svg-demo',
      name: 'svg',
      component: () => import('../views/SvgDemo/svgIndex.vue'),
    },
  ],
})

export default router
