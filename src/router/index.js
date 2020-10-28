import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/fathera'
  },
  {
    path: '/fathera',
    name: 'FatherA',
    component: () => import( '@/views/homePage/fatherAndSon/FatherA.vue')
  },
  {
    path: '/fatherb',
    name: 'FatherB',
    component: () => import( '@/views/homePage/brothers/FatherB.vue')
  },

  {
    path: '/ancestor',
    name: 'Ancestor',
    component: () => import( '@/views/homePage/ancestorAndGrandson/Ancestor.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
