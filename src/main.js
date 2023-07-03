/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-03 17:22:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-03 17:32:57
 * @Description:
 */
import { createApp } from 'vue';

import DataVVue3 from '@kjgl77/datav-vue3';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/main.css';
import '@/style/index.less';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(router).use(store).use(DataVVue3).mount('#app');
