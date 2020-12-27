import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps"

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Using Google Maps
Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    },
    installComponents: true
})

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')