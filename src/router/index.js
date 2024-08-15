import { createRouter, createWebHistory } from 'vue-router'
import GalleryPage from "@/views/GalleryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GalleryPage
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import('../views/DeatilsPage.vue')
    }
  ]
})

export default router
