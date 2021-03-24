import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import store from "../store/index"
const routes = [
  {
    path: '/login',
    component: () => import('@/views/user/login'),
    hidden: true
  },
  // { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  // { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // { path: '/billAbnormity', component: () => import('@/views/bill/billAbnormity'), hidden: true },
  // { path: '/info', component: () => import('@/views/plateform/interfaceinfo/info'), hidden: true },
  {
    path: '/index',
    component: Index,
    hidden: true,
    meta: { title: '首页', icon: '首页' }
  },
  {
    path: '/',
    component: Index,
    hidden: true,
    meta: { title: '首页', icon: '首页' }
  }
]



// export { asyncRouterMap }

// let asyncRouterMap = []

// export function loadAsyncRouterMap(routerMap) {
//   if (routerMap !== null) {
//     const routerMapStr = JSON.stringify(routerMap)
//     new Promise((resolve) => {
//       localStorage.setItem('routerMap', routerMapStr)
//       resolve()
//     })
//     routerMap.forEach(router => {
//       wrapRouter(router)
//     })
//   }
//   asyncRouterMap = routerMap
// }

// function wrapRouter(router) {
//   if (router.isLayout) {
//     router.component = Index
//   } else if (router.componentPath != null && router.componentPath !== '') {
//     router.component = () => import(`@/${router.componentPath}.vue`)
//   }
//   router.meta = {}
//   if (router.title != null && router.title !== '') {
//     router.meta.title = router.title
//   }
//   if (router.navId != null && router.navId !== '') {
//     router.meta.navId = router.navId
//   }
//   if (router.affix != null && router.affix !== '') {
//     router.meta.affix = router.affix
//   }
//   if (router.icon != null && router.icon !== '') {
//     router.meta.icon = router.icon
//   }

//   if (router.roles != null && router.roles !== '') {
//     router.meta.roles = router.roles
//   }
//   if (router.noCache != null && router.noCache !== '') {
//     router.meta.noCache = router.noCache
//   }
//   if (router.children != null && router.children.length !== 0) {
//     router.children.forEach(routerChild => {
//       wrapRouter(routerChild)
//     })
//   }
// }

// export function getAsyncRouterMap() {
//   return asyncRouterMap
// }

// export function loadAllMenuFromRemote() {
//   return new Promise((resolve) => {
//     this.$http({ url: '/menuTree/loadAllMenu', method: 'get' }).then(response => {
//       const result = response.data
//       let routerMap = []
//       if (result.data != null) {
//         routerMap = result.data
//       }
//       loadAsyncRouterMap(routerMap)
//       resolve()
//     })
//   })
// }



const router = createRouter({
  history: createWebHashHistory(),
  routes:routes
})

router.beforeEach((to, from, next) => {
  const isLogin = store.state.islogin ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
})

export default router
