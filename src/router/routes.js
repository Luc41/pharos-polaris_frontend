
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageOne.vue') },
      { path: '/sites', component: () => import('pages/PageTwo.vue') },
      { path: '/about', component: () => import('pages/PageThree.vue') },
      { path: '/contact', component: () => import('pages/PageFour.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
