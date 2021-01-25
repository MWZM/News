import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 设置路由懒加载
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/my',
        component: () => import('@/views/my')
      },
      {
        path: '/QA',
        component: () => import('@/views/QA')
      },
      {
        path: '',
        component: () => import('@/views/home')
      },
      {
        path: '/video',
        component: () => import('@/views/video')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
