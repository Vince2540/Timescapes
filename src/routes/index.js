
import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/products.vue"
import Cart from "./../components/cart.vue"


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
      },
      
      
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
      
      
     
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router
