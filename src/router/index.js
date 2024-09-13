import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/loginView',
    name: 'loginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signupView',
    name: 'signupView',
    component: () => import('../views/SignupView.vue')
  },
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
    path: '/singleProductView/:id',
    name: 'singleProductView',
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/cartView',
    name: 'cartView',
    component: () => import('../views/CartView.vue')
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
