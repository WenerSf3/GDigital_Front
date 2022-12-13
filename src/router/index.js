import Vue from 'vue';
import VueRouter from 'vue-router';
import PaginaInicial from '../views/Paginainicial.vue';
import produtos2 from '../views/produtos.vue';
import teste from '../views/teste.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'paginainicial',
    component: PaginaInicial
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: produtos2
  },
  {
    path: '/teste',
    name: 'teste',
    component: teste
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
