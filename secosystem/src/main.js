import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Home from './components/Home'
import AboutUs from './components/AboutUs'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { // primero muestra el componente Inicio
      path: '/',
      component: Home
    },
    { // About Us
      path: '/aboutus',
      component: AboutUs
    }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
