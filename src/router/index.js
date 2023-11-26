import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/Skeleton.vue"),
    redirect: "/discover",
    children: [
      {
        path: "my",
        component: () => import("../pages/My/Index.vue"),
        redirect: "/my/play-list",
        children: [
          {
            path: "play-list",
            component: () => import("../pages/My/PlayList.vue"),
          },
          {
            path: "follows",
            component: () => import("../pages/My/Follows.vue"),
          },
        ],
      },
      {
        path: "history",
        component: () => import("../pages/History.vue"),
      },
      {
        path: "graph",
        component: () => import("../pages/Graph.vue"),
      },
      {
        path: "/settigs",
        component: () => import("../pages/Settings.vue"),
      },
      {
        path: "discover",
        component: () => import("../pages/Discover.vue"),
      },
      {
        path: "login",
        component: () => import("../pages/Login.vue"),
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
        component: () => import("../pages/Album/Index.vue"),
        redirect: "/album/music",
        children: [
          {
            path: "music",
            component: () => import("../pages/Album/Music.vue"),
          },
          {
            path: "details",
            component: () => import("../pages/Album/Details.vue"),
          },
        ],
      },
    ],
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
