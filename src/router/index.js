import Vue from 'vue'
import Router from 'vue-router'
//引入所有的路由
import routes from './routes'

Vue.use(Router)

// 新建路由器
const router = new Router({
  // 启动history模式
  mode: 'history',
  // 注册所有的路由
  routes: routes
})
// 设置路由拦截器，当路由跳转前执行
router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  console.log('我要跳转到: ', to)
  next()
})

//导出新建的路由器
export default  router
