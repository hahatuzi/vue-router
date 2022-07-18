<template>
  <div>
    <nav-header></nav-header>
    <side-bar></side-bar>
    <main-body></main-body>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import MainBody from './MainBody.vue'
import NavHeader from './NavHeader.vue'
export default {
  components: {
    SideBar,
    MainBody,
    NavHeader
  },
}
</script>

<style>

</style>