import {RouteRecordRaw} from 'vue-router'

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Login from "@/pages/Login/index.vue";
import Test from '@/pages/Learn/test.vue';
// const LearnA = () => import('@/pages/Learn/learnA.vue')
import LearnA from '@/pages/Learn/learnA.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/test',
    component: Test,
    name: 'test',
    children: [
      {
        path: 'learnA',
        component: LearnA,
        name: 'learn-a',
        meta: {title: '响应性'}
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

export default routes