import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fone from "../views/F1.vue";
import Ftruck from "../views/FTruck.vue";
import Motogp from "../views/Motogp.vue";
import Nascar from "../views/Nascar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/f1",
    name: "F1",
    component: Fone,
  },
  {
    path: "/ftruck",
    name: "Ftruck",
    component: Ftruck,
  },
  {
    path: "/motogp",
    name: "Motogp",
    component: Motogp,
  },
  {
    path: "/nascar",
    name: "Nascar",
    component: Nascar,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
