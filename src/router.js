import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Auth/Login.vue'
import Register from './pages/Auth/Register.vue'
import store from './store'
import Main from './pages/Main.vue';
import Catalog from './pages/Catalog.vue';
import Blog from './pages/Blog.vue';
import Cart from './pages/Cart.vue';
import Profile from './pages/Profile.vue';
import Pay from './pages/Auth/Pay.vue';
import About from './pages/About.vue';
import Specifications from './pages/Specifications.vue';

const routes = [
        { path: '/login', component: Login },
        { path: '/register', component: Register, },
        { path: '/', name: 'main', component: Main },
        { path: '/catalog', name: 'catalog', component: Catalog },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/cart', name: 'cart', component: Cart},
        { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
        { path: '/pay', name: 'pay', component: Pay},
        { path: '/about', name: 'about', component: About},
        { path: '/specifications', name: 'specifications', component: Specifications},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Защита маршрутов
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
