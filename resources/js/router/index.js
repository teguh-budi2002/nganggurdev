import { createRouter, createWebHistory } from 'vue-router';

// const routes = [
//     {
//         path: '/:locale(id|en)',
//         children: [
//             {
//                 path: '',
//                 redirect: to => {
//                   return {
//                     name: 'home',
//                     params: to.params
//                   };
//                 }
//               },
//             {
//                 path: '',
//                 name: 'home',
//                 component: () => import('../components/pages/Home.vue')

//             }
//         ]
//      },
// ];

const routes = [
    {
        'path': '/:locale(id|en)',
        'name': 'home',
        'component': () => import('../components/pages/Home.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const locale = to.params.locale || 'en';
    
    if (!locale.match(/^(id|en)$/)) {
        console.warn(`Invalid locale: ${locale}. Redirecting to default locale 'en'.`);
        return next({
        name: to.name || 'home',
        params: { ...to.params, locale: 'en' },
        query: to.query,
        });
    }

    next();
});

export default router;