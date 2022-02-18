import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Editor from '@/views/Editor.vue'
import TemplateDetail from '@/views/TemplateDetail.vue'
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'template/:id',
          name: 'Template',
          component: TemplateDetail
        },
      ]
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})

export default router
