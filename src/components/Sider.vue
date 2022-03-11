<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapsesss"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
  >
    <h3 @click="clickOpen">通用后台</h3>
    <el-menu-item
      v-for="item in noCHildren"
      :index="item.path"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-for="(item, index) in haxCHildren"
      :key="item.path"
      :index="`${index}`"
    >
      <template :index="item.path" slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="items in item.children"
        :key="items.path"
        :index="items.path"
      >
        <el-menu-item :index="items.path">
          <i :class="'el-icon-' + items.icon"></i>
          <span slot="title">{{ items.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "home",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noCHildren() {
      return this.menu.filter((item) => !item.children);
    },
    haxCHildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapsesss() {
      console.log(this.$store.state.tab.isCollapse, "sddsd");
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
    clickOpen() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>
<style lang="less">
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
  }
}
</style>
