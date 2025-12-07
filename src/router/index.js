import { createRouter, createWebHistory } from 'vue-router'
import FullPage from '../views/FullPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FullPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
