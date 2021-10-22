
const routes = [
  {
    path: '/',
    redirect: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/settings', component: () => import('src/modules/settings/Settings.vue') },
      { path: '/cards', component: () => import('src/modules/cards/Cards.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
