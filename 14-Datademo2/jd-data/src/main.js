import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import './assets/commont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')