
const PlanStart = () => import('@/views/planStart/index.vue')
const PlanSpace = () => import('@/views/planSpace/index.vue')
const Main = () => import('@/views/main/index.vue')


const routes =  [
    {
      path: '/',
      redirect: '/main',
      id: 0
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: {
        title: '首页',
        id: 1
      }
    },
    {
      path: '/start',
      name: 'plan-start',
      component: PlanStart,
      meta: {
        title: 'Plan Start',
        id: 2
      }
    },
    {
      path: '/space',
      name: 'plan-space',
      component: PlanSpace,
      meta: {
        title: 'Plan空间',
        id: 3
      }
    },
]

export default routes