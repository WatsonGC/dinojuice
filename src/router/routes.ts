// eslint-disable-next-line import/named
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'LoginChild', path: '', component: () => import('pages/Login.vue') }]
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'RegisterChild', path: '', component: () => import('pages/Register.vue') }]
  },
  {
    path: '/Delivery',
    name: 'Delivery',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'DeliveryChild', path: '', component: () => import('pages/Delivery.vue') }]
  },
  {
    path: '/History',
    name: 'History',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/History.vue') }]
  },
  {
    path: '/Mystery',
    name: 'Mystery',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HiRyan.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
