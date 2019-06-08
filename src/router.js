import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "kenteken" */ './views/Home.vue')
    },
    {
      path: '/callback',
      name: 'spotify',
      component: () => import( /* webpackChunkName: "kenteken" */ './views/Home.vue')
    }
  ]
});

export default router;