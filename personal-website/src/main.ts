import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import request from './config/request';

import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
import './assets/customize.less'

const app = createApp(App)

app.config.globalProperties.$request = request

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
