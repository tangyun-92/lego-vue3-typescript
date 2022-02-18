import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Editor from '@/views/Editor.vue'
import TemplateDetail from '@/components/TemplateDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/template/:id',
      name: 'Template',
      component: TemplateDetail
    }
  ]
})

export default router
