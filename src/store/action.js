import {getRouters} from '@/api/index'
import {formatRouter} from '@/utils/index'
import Layout from '@/components/Layout/index'
export default {
  setUserRouters({commit,state}) {
    return new Promise( async resolve => {
      const {data} = await getRouters({name:state.username})
      if (data) {

      const userRouters = formatRouter(data.routers)

      const sdata = JSON.parse(JSON.stringify(userRouters))
      const sRouter = filterAsyncRouter(sdata)

      commit('setUserRouters',sRouter)
      commit('setAuth', true)
      resolve(sRouter)
    }
    })
  }
}
function filterAsyncRouter (routers) {
  return routers.filter(item => {
    if (item.component) {
      if (item.component === 'Layout') {
        item.component = Layout
      } else {
        item.component = loadView(item.component)
      }
    }
    if (item.children && item.children.length) {
      item.children  = filterAsyncRouter(item.children)
    }
    return true
  })
}
function loadView (view) {
  if (process.env.NODE_ENV === 'development') {
    return (resolve) => require([`@/views/${view}`], resolve)
  } else {
    return () => import(`@/views/${view}`)
  }
}