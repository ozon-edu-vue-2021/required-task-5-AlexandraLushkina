<template>
  <div class="goods">
    <div v-for="good in goods" :key="good.uid">
      <card-expanded
        :img="good.img"
        :description="good.description"
        :name="good.dish"
        :price="good.price"
        :uid="good.uid"
        :isFavourite="good.isFavourite"
        class="card"
        @good-added="onGoodAdded"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardExpanded from "../components/CardExpanded";
import { mapState } from "vuex";

export default {
  name: "Goods",
  components: {
    CardExpanded,
  },
  mounted() {
    if (!this.goods.length) {
      axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((resp) => {
          const goodsWithImgPrice = this.makeGoodsList(resp.data);
          this.$store.commit("setGoodsList", goodsWithImgPrice);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  computed: {
    images() {
      const path = require.context("@/assets/images/", false, /\.webp$/);
      return path.keys().map(path);
    },
    ...mapState(["countGoods", "goods"]),
  },
  methods: {
    makeGoodsList(goods) {
      goods.forEach((good) => {
        good.img = this.getRandomImage();
        good.price = this.getRandomPrice();
      });
      return goods;
    },
    getRandomImage() {
      return this.images[Math.floor(Math.random() * this.images.length)];
    },
    getRandomPrice() {
      return Math.floor(Math.random() * 5000) + 10;
    },
    onGoodAdded(options) {
      this.$store.commit("addToBasket", options);
    },
  },
};
</script>

<style scoped>
.goods {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.card {
  height: calc(100% - 20px);
  padding: 20px;
  margin: 10px;
}
</style>
