<template>
  <el-container>
    <el-aside width="200px"> <sider></sider> </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sider from "../components/Sider.vue";
export default {
  name: "Home",
  components: {
    sider: Sider,
  },
  data() {
    return {
      // isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.el-header {
  background: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-container {
  height: 100%;
}
</style>
