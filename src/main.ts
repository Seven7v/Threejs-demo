import { createApp } from 'vue'
import './assets/style/common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { initRouter } from './routes'

const app = createApp(App)
initRouter(app)
app.use(mavonEditor)
app.use(ElementPlus)
app.mount('#app')
