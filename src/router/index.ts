import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    name: "notFound",
    path: "/:path(.*)+",
    redirect: { path: "/" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = (to.meta?.title as string) || "vue-h5-starter";
  document.title = title;
  next();
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
