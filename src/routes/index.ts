import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(), //history模式
  routes
})

// 封装路由方法，传入app <Element> 代表页面内的标签元素
export const initRouter = (app: App<Element>) => {
    app.use(router)
  }