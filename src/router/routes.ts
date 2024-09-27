import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    redirect: '/orders/',
  },

  {
    path: '/orders',
    name: 'orders',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/orders',
        name: 'orderList',
        component: () => import('src/pages/OrdersPage.vue'),
      },
      {
        path: '/meetings',
        name: 'meetings',
        component: () => import('src/pages/MeetingsPage.vue'),
      },
      {
        path: '/orders/:id',
        name: 'orderDetails',
        component: () => import('src/pages/OrderDetailsPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
