import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'), // 建议进行路由懒加载，优化访问性能
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/home',
    component: Layout,
    name: '首页',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
      meta: { title: '首页', icon: 'HomeFilled' }
    }]
  }, {
    path: '/one',
    component: Layout,
    name: '一级菜单',
    children: [{
      path: '/one',
      name: 'one',
      component: () => import('@/views/one.vue'),
      meta: { title: '一级菜单', icon: 'AppstoreFilled' }
    }]
  },
  {
    path: '/two',
    component: Layout,
    // redirect: '/two/menu-1',
    name: '二级菜单',
    meta: { title: '二级菜单', icon: 'ReadFilled' },
    children: [
      {
        path: '/two/menu-1',
        name: '二级菜单1',
        component: () => import('@/views/two/menu-1.vue'),
        meta: { title: '二级菜单1' }
      },
      {
        path: '/two/menu-2',
        name: '二级菜单2',
        component: () => import('@/views/two/menu-2.vue'),
        meta: { title: '二级菜单2' }
      }
    ]
  },
  {
    path: '/three',
    component: Layout,
    // redirect: '/three/module1',
    name: '多级菜单',
    meta: { title: '多级菜单', icon: 'ProfileFilled' },
    children: [
      {
        path: '/three/menu1',
        component: () => import('@/views/three/menu1/index.vue'), // Parent router-view
        name: '多级菜单一',
        meta: { title: '多级菜单一' },
        children: [
          {
            path: '/three/menu1/menu1-1',
            component: () => import('@/views/three/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: '/three/menu1/menu1-2',
            component: () => import('@/views/three/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: '/three/menu1/menu1-2/menu1-2-1',
                component: () => import('@/views/three/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              }             
            ]
          }
        ]
      },
      {
        path: '/three/menu2',
        component: () => import('@/views/three/menu2/index.vue'),
        name: '多级菜单二',
        meta: { title: '多级菜单二' }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    name: '外部链接',
    children: [
      {
        path: 'https://www.jianshu.com/u/866d2b92dd92',
        meta: { title: '外部链接', icon: 'IeSquareFilled' }
      }
    ]
  }
]

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHistory(),
  routes: constantRoutes
})

export default router