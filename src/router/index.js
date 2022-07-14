import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
   {
    path: '/about/',
    name: 'about',
    component: AboutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
