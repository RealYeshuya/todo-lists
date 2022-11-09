import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home-view.vue'
import TodoListView from '../views/todo-list-view.vue'
import routerNames from '@/constants/router-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routerNames.HOME,
    component: HomeView
  },
  {
    path: '/todoList',
    name: routerNames.TODOLIST,
    component: TodoListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
