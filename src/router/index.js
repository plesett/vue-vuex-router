import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "首页~", roles: ['user'] },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: "首页~", roles: ['admin'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: "首页~", roles: ['admin', 'user'] },
    component: () => import('../views/login.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: { title: "首页~", roles: ['admin', 'user'] },
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const roles = 'user'

/**
 * 通过路由判断权限
 * 适用于多种权限管理
 */
router.beforeEach((to, from, next) => {
  // -1 不存在
  if (to.meta.roles.indexOf(roles) === -1) {
    console.log('权限不足')
    // next({ path: '/404' })
    next(`/login?redirect=${to.path}`)
  } else {
    console.log(to.path, '权限正常')
    next()
  }
})

export default router
