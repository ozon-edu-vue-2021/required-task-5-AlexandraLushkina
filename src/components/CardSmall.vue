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
      <div @click="like">
        <IconBase class="heart" :isFull="checkIsFavourite(uid)" />
      </div>
    </div>
  </div>
</template>

<script>
import minusSVG from "../assets/images/minus.svg";
import plusSVG from "../assets/images/plus.svg";
import IconBase from "./IconBase";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardSmall",
  components: {
    IconBase,
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
    ...mapActions(["changeBasketAmount", "toggleFavourite"]),
    like() {
      this.toggleFavourite({
        isFavourite: !this.checkIsFavourite(this.uid),
        uid: this.uid,
      });
    },
    add() {
      this.changeBasketAmount({
        uid: this.uid,
        operation: "+",
      });
    },
    subtract() {
      this.changeBasketAmount({
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
