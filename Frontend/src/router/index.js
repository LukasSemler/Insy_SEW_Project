import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import Login_RegisterView from '../views/Login_RegisterView.vue';
import Comp_Login from '../components/Comp_Login.vue';
import Comp_Register from '../components/Comp_Register.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';
import CheckoutView from '../views/CheckoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: ProductDetailView,
    },
    {
      path: '/loginregister',
      name: 'loginregister',
      component: Login_RegisterView,
      children: [
        { path: '', component: Comp_Login },
        { path: 'register', component: Comp_Register },
      ],
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPageView.vue'),
    },
    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
