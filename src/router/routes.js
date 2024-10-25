// const routes = [
//   {
//     path: '/auth',
//     component: () => import('layouts/AuthLayout.vue'),
//     children: [
//       {
//         path: '',
//         component: () => import('pages/LoginPage.vue')
//       }
//     ]
//   },
//   {
//     path: '/dashboard',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       // {
//       //   path: '',
//       //   component: () => import('pages/Dashboard.vue')
//       // }
//     ]
//   }
//   // Always leave this as last one,
//   // but you can also remove it
//   // {
//   //   path: '/:catchAll(.*)*',
//   //   component: () => import('pages/ErrorNotFound.vue')
//   // }
// ]

// export default routes
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LoginPage.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dashboard.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
