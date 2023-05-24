import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tasks from '../pages/Tasks.vue'
import Projetos from '../pages/Projetos.vue'
import FormAddProj from '../pages/Projetos/FormAddProj.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/projetos/new',
        name: 'Novo projeto',
        component: FormAddProj
    },
    {
        path: '/projetos/:id',
        name: 'Edit project',
        component: FormAddProj,
        props: true
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router