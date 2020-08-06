import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Byeworld from '../components/Byeworld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/byebye',
    name: 'Bye',
    component: Byeworld,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
