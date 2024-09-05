import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/productsView',
    name: 'productsView',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/singleProductView',
    name: 'singleProductView',
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/adminView',
    name: 'adminView',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import('../views/ContactView.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
