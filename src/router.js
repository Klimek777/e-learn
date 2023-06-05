import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue';
import Register from './components/Register.vue';

import Dashboard from './components/Dashboard.vue';
import Search from './components/Search.vue';
import CreateCourse from './components/CreateCourse.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/search', component: Search },
  { path: '/create-course', component: CreateCourse },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
