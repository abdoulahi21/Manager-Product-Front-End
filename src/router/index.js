import { createRouter, createWebHistory } from 'vue-router';
import CartPage from '../components/pages/CartPage.vue';
import CheckoutPage from '../components/pages/CheckoutPage.vue';
import LoginPage from '@/components/admin/LoginPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import RegisterPage from '@/components/admin/RegisterPage.vue';

const routes = [
    
    {
        name: "LoginPage",
        path: "/login",
        component: LoginPage
    },
       
    {
        name: "RegisterPage",
        path: "/register",
        component: RegisterPage
    },
    {
        path: '/cart',
        component: CartPage,
        name: 'CartPage'
    },
    {
        path: '/checkout/:id?',
        component: CheckoutPage,
        name: 'CheckoutPage'
    },
    {
        path: '/',
        component: HomePage,
        name: HomePage
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = !!localStorage.getItem('token');

    if (requiresAuth && !isAuthenticated) {
        next({ name: 'LoginPage' });
    } else {
        next();
    }
});
export default router;