<template>
  <div class="goods">
    <div v-for="good in getFavourites" :key="good.uid">
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
import CardExpanded from "../components/CardExpanded";
import { mapGetters } from "vuex";

export default {
  name: "Favourite",
  components: {
    CardExpanded,
  },
  computed: {
    ...mapGetters(["getFavourites"]),
  },
  methods: {
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
