import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 需要layout的页面
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: 'Home',
        },
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: 'About',
        },
        component: () => import('@/views/About.vue'),
      },
    ],
  },
  // 不需要layout的页面
  { path: '/fullscreen', component: () => import('@/views/Fullscreen.vue') },
  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
