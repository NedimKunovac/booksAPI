import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SavedBooksView from "../views/SavedBooksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/saved",
      name: "saved books",
      component: SavedBooksView,
    },
  ],
});

export default router;
