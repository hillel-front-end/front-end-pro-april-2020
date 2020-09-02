import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from './components/Weather'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)


const routes = [
  { name: 'WeatherWithCityRoute', path: '/weather/:city', component: Weather },
  { path: '/welcome', component: HelloWorld },
  { path: '/:category/:productId' }
];

export default new VueRouter({
  routes
});