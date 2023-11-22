import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About.vue'
import Product from '@/pages/Product/Product.vue'
import Cart from '@/pages/Cart/Cart.vue'
import Contact from '@/pages/Contact/Contact.vue'
import Collections from '@/pages/Collections/Collections.vue'


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
        path: '/product/:id',
        name:'Product',
        component: Product,
        meta: {
            breadcrumbs: ['home', 'products']
        }
    },
    {
        path: '/cart',
        name:'Cart',
        component: Cart,
    },
    {
        path: '/collections',
        name:'Collections',
        component: Collections,
    },
    {
        path: '/contact',
        name:'Contact',
        component: Contact,
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