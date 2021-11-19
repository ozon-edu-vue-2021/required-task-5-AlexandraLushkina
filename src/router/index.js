import Vue from "vue";
import Router from "vue-router";

import Goods from "../views/Goods";
import Basket from "../views/Basket";
import Favourite from "../views/Favourite";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Goods,
    },
    {
      path: "/basket",
      component: Basket,
    },
    {
      path: "/favourite",
      component: Favourite,
    },
  ],
});
