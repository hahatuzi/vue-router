<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  height: 50px;
  line-height: 50px;
  padding-left: 200px;
  border-bottom: 1px solid #ccc;
}
::v-deep .el-breadcrumb{
  line-height: 50px;
}
</style>