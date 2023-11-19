import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/velcome",
    name: "Velcome",
    component: () => import("../pages/Velcome.vue"),
  },
  {
    path: "/creator-center",
    name: "CreatorCenter",
    component: () => import("../pages/CreatorCenter.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home.vue"),
    children: [
      {
        path: "discover",
        name: "Discover",
        component: () => import("../pages/Discover.vue"),
      },
      {
        path: "my-follows",
        name: "MyFollows",
        component: () => import("../pages/MyFollows.vue"),
      },
      {
        path: "my-favorites",
        name: "MyFavorites",
        component: () => import("../pages/MyFavorites.vue"),
      },
    ],
  },
];
//export router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
