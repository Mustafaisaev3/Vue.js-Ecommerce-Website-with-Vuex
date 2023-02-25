import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About.vue'
import Product from '@/pages/Product/Product.vue'
import Cart from '@/pages/Cart/Cart.vue'


const routes = [
    {
        path: '/',
        name:'Home',
        component: Home,
    },
    {
        path: '/about',
        name:'About',
        component: About,
    },
    {
        path: '/product',
        name:'Product',
        component: Product,
    },
    {
        path: '/cart',
        name:'Cart',
        component: Cart,
    },
]

const router = new createRouter({
    routes,
    base: process.env.BASE_URL,
    history: createWebHistory(),
    // linkActiveClass: 'active',
    // scrollBehavior () {
    //   return { x: 0, y: 0 };
    // }
});


export default router