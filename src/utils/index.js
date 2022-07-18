import { asyncRouters } from '@/router/index'
// 将路由菜单数据格式化为树形结构
export function formatRouter (data) {
  // 先将路由列表添加vue路由参数
  // 将路由菜单树的url转化为符合vue路由树的path
  data.forEach(item =>{
    if (item.parent_id == 0) {
      item.path = item.url
    } else {
      let arr = item.url.split('/')
      item.path = arr[arr.length - 1]
    }
  })
  addInfo(asyncRouters)
  // console.log(data)
  function addInfo (old) {
    old.forEach(item => {
       data.map(el => {
        if (!item.children) {
            if(item.path == el.path) {
              el = Object.assign(el, item)
            }
        } else {
          const {children, ..._item} = item
          if (item.path == el.path) {
            el = Object.assign(el, _item)
          }
          addInfo(item.children)
        }
      })
    })
  }
  // 处理方法，再递归前的我们可以先分类
  let parents = data.filter(item => item.parent_id == 0),
      children = data.filter(item => item.parent_id != 0)
  function transformToTree (parent, child) {
    parent.map(p_item =>{
      child.map((c_item, i) => {
        if (c_item.parent_id == p_item.id) {
          // 再次递归之前我们要注意对child进行去重
          let _c = JSON.parse(JSON.stringify(child))
          _c.splice(i, 1)
          transformToTree(child, [c_item])
          if (p_item.children && p_item.children.length !== 0 ) {
            p_item.children.push(c_item)
          } else {
            p_item.children = [c_item]
          }
        }
      })
    })
  }
  transformToTree(parents, children)
  return parents
}
// 将树形结构转为路由树形结构
// export function generateRouter (userRouters) {
//   const sdata = JSON.parse(JSON.stringify(userRouters))
//   const rdata = JSON.parse(JSON.stringify(userRouters))
//   function filterAsyncRouter (router) {

//   }
// }

