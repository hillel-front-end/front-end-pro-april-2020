import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Components
import { MdButton, MdDatepicker, MdField } from 'vue-material/dist/components'



// Vendors
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdDatepicker)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'KEY',
    libraries: 'places geocode',
  },
  installComponents: true
})


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
