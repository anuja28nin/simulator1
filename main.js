import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ButtonGroupPlugin } from 'bootstrap-vue'
import { FormRadioPlugin } from 'bootstrap-vue'
import { DropdownPlugin } from 'bootstrap-vue'
import { BFormFile } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ButtonGroupPlugin)
Vue.use(FormRadioPlugin)
Vue.use(DropdownPlugin)
Vue.component('b-form-file', BFormFile)

new Vue({
  router,
  render: h => h(App), 
}).$mount('#app')
