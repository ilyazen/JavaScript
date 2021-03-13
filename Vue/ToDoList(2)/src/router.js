import { createRouter, createWebHistory } from 'vue-router'
import ToDoMain from './views/ToDoMain'
import Create from './views/Create'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/todomain', component: ToDoMain, alias: '/' },
    { path: '/create', component: Create},

  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
