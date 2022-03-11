/**
  功能：路由守卫
  作者：pancheng
  邮箱：754724101@qq.com
  时间：2022年02月19日 16:33:52
  版本：v1.0
 */
import router from './router/index';
import Storage from './utils/stroage';
import NProgress from 'nprogress'
import 'nprogress/css/nprogress.css'

const whiteList = ['/login', '/404'] // 路由白名单

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = Storage.get('access-token');
  if (hasToken) {
    if (to.path == '/login') {
      next()
      NProgress.done()
    } else {
      // 在此拦截不可访问路由
      next()
      NProgress.done()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.onError((handler: any) => {
  console.log("error:", handler);
  NProgress.done()
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
