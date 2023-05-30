import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/tasks',
        name: 'tasks',
        component: () => import('@/components/TaskList.vue')
    },
    {
        path: '/tasks/new',
        name: 'tasks-new',
        component: () => import('@/components/TaskForm.vue')
    },
    {
        path: '/tasks/detail/:id',
        name: 'tasks-details',
        component: () => import('@/components/TaskDetail.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
