import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Layout = () => import("@/views/layout/index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
          title: "登录",
        },
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    children: [
      {
        path: "category",
        name: "category",
        component: () => import("@/views/system/Category.vue"),
        meta: {
          title: "新建分类",
        },
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/system/User.vue"),
        meta: {
          title: "用户管理",
        },
      },
    ],
    meta: {
      title: "系统管理",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from) => {});

export { routes };
export default router;
