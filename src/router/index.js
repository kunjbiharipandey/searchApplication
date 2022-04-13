import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Head from '../components/Head.vue';
import Register from '../components/Register.vue';
import Cart from '../components/Cart.vue';
import ForgetPass from '../components/ForgetPass.vue';
import Search from '../components/Search.vue';
const routes = [
  {
    path: '/home',
    name: 'Head',
    component: Head
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/forget-pass',
    name: 'ForgetPass',
    component: ForgetPass
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }


];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;