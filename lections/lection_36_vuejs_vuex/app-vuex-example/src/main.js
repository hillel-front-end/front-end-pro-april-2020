import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false


window.global_data = [1, 2, 3];

const state = {
  x: 10,
  y: 20,
  global_data: [1,2,3]
};


new Vue({
  render: h => h(App),
  data: {
    x: 10,
    y: 60,
    sharedState: state
  },
  store
}).$mount('#app')


// new Vue({
//   render: h => h(App),
//   data: {
//     x: 100,
//     y: 600,
//     sharedState: state
//   }
// }).$mount('#app2')

