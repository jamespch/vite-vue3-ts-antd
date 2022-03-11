import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as echarts from 'echarts';
import 'ant-design-vue/dist/antd.css'
import './styles/global.less'
import './permission'

const app = createApp(App)
app.config.globalProperties.echarts = echarts;
app.use(router).use(store).use(Antd).mount('#app')
