import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Workers from './views/Workers.vue'
import Companies from './views/Companies.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clients',
      name: 'clients',
      component: Workers
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    }
  ]
})
