import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  // Registeration routes
  { path: '/signup', name: 'signup', component: () => import('../views/registeration/SignUpView.vue'), meta: {title: 'Signup'} },
  { path: '/login', name: 'login', component: () => import('../views/registeration/LoginView.vue'), meta: {title: 'Login'} },

  // index
  { path: '/', name: 'index', component: () => import('../views/index.vue'), meta: {title: 'Home'} },

  // Restaurant route
  { path: '/restaurants/:slug', name: 'restaurant', component: () => import('../views/RestaurantView.vue') },
  
  // Not Found Page
  // {
  //   path: '/pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('../views/NotFound.vue'),
  // }
]


const router = createRouter({
  beforeEach(toRoute, fromRoute) {
    changeMetaTags(toRoute.meta || {})
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
