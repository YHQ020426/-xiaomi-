import App from './App'
//引入全局组件
import divider from "@/components/common/divider.vue"

Vue.component('divider',divider)

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

