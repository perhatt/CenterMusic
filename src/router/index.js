import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Discover",
    component: () => import("../pages/Discover.vue"),
  },
];
//export router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
