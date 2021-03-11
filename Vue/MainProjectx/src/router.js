import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './views/Welcome'
import Main from './views/Main'
import AppConstuctor from './constuctor/AppConstuctor'
import NewsList from './newslist/src/NewsList'
import WorkPlan from './workplan/AppWorkPlan'

const router = createRouter({
   history: createWebHistory(),
   routes: [
     { path: '/welcome', component: Welcome, alias: '/' },
     { path: '/main', component: Main },
     { path: '/constuctor', component: AppConstuctor },
     { path: '/news', component: NewsList },
     { path: '/workplan', component: WorkPlan },
     
   ],
   linkActiveClass: 'active',
   linkExactActiveClass: 'active'
 })
 export default router