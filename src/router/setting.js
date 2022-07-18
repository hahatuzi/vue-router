export default {
  "name": "setting",
  "path": "/setting",
  "hidden": false,
  "redirect": "/setting/user",
  "component": "Layout",
  "alwaysShow": false,
  "meta": {
    "title": "权限管理",
    "icon": "tree-table",
    "noCache": false,
    "link": null
  },
  children: [
    {
      "name": "setting_user",
      "path": "user",
      "hidden": false,
      "component": "/setting/user/index",
      "meta": {
        "title": "用户管理",
        "icon": "",
        "noCache": false,
        "link": null
      }
    },
    {
      "name": "setting_role",
      "path": "role",
      "hidden": false,
      "component": "/setting/role/index",
      "meta": {
        "title": "角色管理",
        "icon": "",
        "noCache": false,
        "link": null
      }
    }
  ],
}