import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store/index.ts'

createApp(App)
        .use(Antd)
        .use(router)
        .use(store)
        // .use(store)
        .mount('#app')
