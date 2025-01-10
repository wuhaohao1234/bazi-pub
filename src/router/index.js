import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/yinyang',
    name: 'YinYang',
    component: () => import('../views/YinYang.vue')
  },
  {
    path: '/tiangan',
    name: 'TianGan',
    component: () => import('../views/TianGan.vue')
  },
  {
    path: '/dizhi',
    name: 'DiZhi',
    component: () => import('../views/DiZhi.vue')
  },
  {
    path: '/wuxing',
    name: 'WuXing',
    component: () => import('../views/WuXing.vue')
  },
  {
    path: '/nayin',
    name: 'NaYin',
    component: () => import('../views/NaYin.vue')
  },
  {
    path: '/shishen',
    name: 'ShiShen',
    component: () => import('../views/ShiShen.vue')
  },
  {
    path: '/shenshas',
    name: 'ShenShas',
    component: () => import('../views/ShenShas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
