
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index-landing.vue') },
      { path: 'home', component: () => import('pages/Index-landing.vue') },
      { path: 'chuck', component: () => import('pages/Index-chuck.vue') },
      { path: 'mylocation', component: () => import('pages/Index-mylocation.vue') },
      { path: 'camera', component: () => import('pages/Index-camera.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
