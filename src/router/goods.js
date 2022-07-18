export default {
  "name": "goods",
  "path": "/goods",
  "hidden": false,
  "redirect": "/goods/category",
  "component": "Layout",
  "alwaysShow": false,
  "meta": {
    "title": "商品",
    "icon": "tree-table",
    "noCache": false,
    "link": null
  },
  children: [
    {
      "name": "goods_category",
      "path": "category",
      "hidden": false,
      "component": "/goods/category/index",
      "meta": {
        "title": "品类管理",
        "icon": "",
        "noCache": false,
        "link": null
      }
    },
    {
      "name": "goods_product",
      "path": "product",
      "hidden": false,
      "component": "/goods/product/index",
      "meta": {
        "title": "商品管理",
        "icon": "",
        "noCache": false,
        "link": null
      }
    }
  ],
}