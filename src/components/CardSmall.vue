<template>
  <div class="card" v-if="getGoodsAmountInBasket(uid) > 0">
    <img :src="img" class="card-image" />
    <div class="info">
      <h3 class="name">{{ name }}</h3>
      <h2 class="price">{{ price }} ₽</h2>
    </div>
    <div class="controls">
      <div class="counters-controls">
        <button class="counter" @click="subtract">
          <minusSVG />
        </button>
        <span class="amount-text">{{ getGoodsAmountInBasket(uid) }} шт</span>
        <button class="counter" @click="add">
          <plusSVG />
        </button>
      </div>
      <heartFullSVG
        v-if="checkIsFavourite(uid)"
        @click="like(false)"
        class="heart"
      />
      <heartSVG v-else @click="like(true)" class="heart" />
    </div>
  </div>
</template>

<script>
import heartSVG from "../assets/images/heart.svg";
import heartFullSVG from "../assets/images/heartFull.svg";
import minusSVG from "../assets/images/minus.svg";
import plusSVG from "../assets/images/plus.svg";
import { mapGetters } from "vuex";

export default {
  name: "CardSmall",
  components: {
    heartSVG,
    heartFullSVG,
    minusSVG,
    plusSVG,
  },
  props: {
    img: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "name",
    },
    price: {
      type: Number,
      default: 10,
    },
    uid: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["getGoodsAmountInBasket", "checkIsFavourite"]),
  },
  methods: {
    like(bool) {
      this.$store.commit("toggleFavourite", {
        isFavourite: bool,
        uid: this.uid,
      });
      this.isHeartFull = bool;
    },
    add() {
      this.$store.commit("changeBasketAmount", {
        uid: this.uid,
        operation: "+",
      });
    },
    subtract() {
      this.$store.commit("changeBasketAmount", {
        uid: this.uid,
        operation: "-",
      });
    },
  },
};
</script>

<style scoped>
.card {
  justify-self: center;
  border-radius: 8px;
  background-color: #f3f3f3;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: center;
  padding: 10px;
  margin: 20px;
}
.card-image {
  max-height: 80%;
  max-width: 70%;
  padding: 0;
  margin: 2px;
  justify-self: center;
}
.info {
  display: inline;
  justify-self: left;
}
.controls {
  display: flex;
  align-content: center;
  align-items: center;
}
.heart {
  cursor: pointer;
  margin: auto;
  margin-left: 20px;
}
.counter {
  border-radius: 6px;
  background-color: #dfe9f0;
  cursor: pointer;
  color: #005bff;
  border: none;
  margin: 5px;
}
.counters-controls {
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
