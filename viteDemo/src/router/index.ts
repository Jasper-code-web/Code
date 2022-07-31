import { createRouter, createWebHashHistory, Router } from "vue-router";
import routes from "./routes";

//手写router
// import {
//     createRouter,
//     createWebHashHistory
// } from './gRouter/index'


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
