import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/Skeleton.vue"),
    redirect: "/discover",

    children: [
      {
        path: "discover",
        component: () => import("../pages/Discover.vue"),
      },
      {
        path: "/login",
        component: () => import("../pages/Login.vue"),
      },
      {
        path: "my-follows",
        component: () => import("../pages/MyFollows.vue"),
      },
      {
        path: "my-favorites",
        component: () => import("../pages/MyFavorites.vue"),
      },
      {
        path: "artist",
        component: () => import("../pages/Artist/Index.vue"),
        redirect: "/artist/music",
        children: [
          {
            path: "music",
            component: () => import("../pages/Artist/Music.vue"),
          },
          {
            path: "album",
            component: () => import("../pages/Artist/Album.vue"),
          },
          {
            path: "details",
            component: () => import("../pages/Artist/Details.vue"),
          },
        ],
      },
      {
        path: "album",
        component: () => import("../pages/Album.vue"),
      },
    ],
  },
  {
    path: "/musician",
    component: () => import("../pages/Musician/intro.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../pages/404.vue"),
    hidden: true,
    meta: { title: "404" },
  },
  { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch", hidden: true },
];
//export router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
