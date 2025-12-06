import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MisyonVizyon from '../views/MisyonVizyon.vue'
import Hakkimizda from '../views/Hakkimizda.vue'
import Menumuz from '../views/Menumuz.vue'
import InsanKaynaklari from '../views/InsanKaynaklari.vue'
import Iletisim from '../views/Iletisim.vue'
import Ortaklik from '../views/Ortaklik.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/misyon-vizyon',
    name: 'MisyonVizyon',
    component: MisyonVizyon
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda
  },
  {
    path: '/menumuz',
    name: 'Menumuz',
    component: Menumuz
  },
  {
    path: '/insan-kaynaklari',
    name: 'InsanKaynaklari',
    component: InsanKaynaklari
  },
  {
    path: '/iletisim',
    name: 'Iletisim',
    component: Iletisim
  },
  {
    path: '/ortaklik',
    name: 'Ortaklik',
    component: Ortaklik
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

