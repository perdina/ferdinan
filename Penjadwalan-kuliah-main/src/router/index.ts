import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dosen',
      name: 'dosen',
      component: () => import('../views/DosenView.vue')
    },
    {
      path: '/mahasiswa',
      name: 'mahasiswa',
      component: () => import('../views/MahasiswaView.vue')
    },
    {
      path: '/ruangan',
      name: 'ruangan',
      component: () => import('../views/RuanganView.vue')
    }
  ]
})

export default router
