import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

//手写router
// import {
//     createRouter,
//     createWebHashHistory
// } from './gRouter/index'

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Login from "@/pages/Login/index.vue";
import Test from '@/pages/test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: '/test',
        component: Test,
        name: 'test'
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = getToken()
//   const {fullPath} = to
//   if(fullPath === '/login') next()
//   if(!token) {
//     next('/login')
//   }
//   next()
// })


export default router;
