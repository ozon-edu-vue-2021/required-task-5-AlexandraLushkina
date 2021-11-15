<template>
  <div id="app">
    <router-link to="/">
      <heartSVG class="heart-icon" />
    </router-link>
    <router-link to="/basket">
      <basketSVG class="basket-icon" />
    </router-link>
    <router-view />
  </div>
</template>

<script>
import basketSVG from "./assets/images/basket.svg";
import heartSVG from "./assets/images/heart.svg";

export default {
  name: "App",
  components: {
    basketSVG,
    heartSVG,
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
</style>
