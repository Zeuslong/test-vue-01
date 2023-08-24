// import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// 引入ui依赖
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


import * as echarts from 'echarts';
window.echarts = echarts //挂载到window上
app.use(ElementPlus)
// // 引入样式
// import './style/globle.scss'
// // 引入其他
// import URL_CONFIG from '/public/js/config.js'
// window.URL_CONFIG = URL_CONFIG

import pageButton1  from "page-button-test1/pig-ui.common";
import "page-button-test1/pig-ui.css";
app.use(pageButton1)

import senseController from 'one-view-3d-adaptor/one-view-3d-adaptor.common';
import 'one-view-3d-adaptor/one-view-3d-adaptor.css'
app.use(senseController)

import components from "@viewsuper/iclient3d-vue-for-webgl"
// import '@viewsuper/iclient3d-vue-for-webgl/publ'
app.use(components)

app.mount('#app')
