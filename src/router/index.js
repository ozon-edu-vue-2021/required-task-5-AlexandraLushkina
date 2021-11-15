import Vue from "vue";
import Router from "vue-router";

import Goods from "../views/Goods.vue";
import Basket from "../views/Basket.vue";

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
  ],
});
