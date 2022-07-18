import goods from './goods'
import setting from './setting'
import Router from "vue-router";

export const asyncRouters =  [
  goods,
  setting
]
const routers = [{
  path:'/404',
  name:'error',
  component: ()=> import('@/views/error.vue')
}]
export default new Router({
  mode: 'history',
  routers
})