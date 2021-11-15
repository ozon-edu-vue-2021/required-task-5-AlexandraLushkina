<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav-item" to="/">
        <span class="badge">{{ getAllGoodsCount }}</span>
        <boxSVG class="box-icon" />
        <span class="nav-title">Товары</span>
      </router-link>
      <router-link class="nav-item" to="/basket">
        <span class="badge">{{ countGoods }}</span>
        <basketSVG class="basket-icon" />
        <span class="nav-title">Корзина</span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import basketSVG from "./assets/images/basket.svg";
// import heartSVG from "./assets/images/heart.svg";
import boxSVG from "./assets/images/box.svg";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    basketSVG,
    boxSVG,
    // heartSVG,
  },
  computed: {
    ...mapState(["countGoods", "allGoodsCount"]),
    getAllGoodsCount() {
      return this.$store.getters.allGoodsCount;
    },
  },
};
</script>

<style>
#app {
  font-family: "GTEestiDisplay", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 14px;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
.nav {
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  padding: 8px;
}
.nav-item {
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 7px;
  position: relative;
  width: 76px;
}
.badge {
  background-color: #f91155;
  border-radius: 8px;
  color: #fff;
  height: 20px;
  padding: 0 7px;
  position: absolute;
  right: 0;
  top: 0;
}
.nav-title {
  font-family: GTEestiPro, arial, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #005cfe;
}
a {
  text-decoration: none;
}
</style>
