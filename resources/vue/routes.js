const routes = [
    {
        path: '',
        component: () => import('./pages/Visitor.vue'),
        name: 'visitor'
    },
    {
        path: '/editor',
        component: () => import ('./pages/Editor.vue'),
        name: 'editor'
    }
]

export default routes;