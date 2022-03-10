import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//push 
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user/index.vue"),
      },
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
