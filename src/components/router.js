import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/studentsComponent.vue';
import Students from '../components/AddStudentComponent.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/students',
        component: Students
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

