<template>
  <div class="container">
    <h2>Вот ваши покупочки:</h2>
    <div class="content">
      <div class="goods">
        <div v-for="good in inBasket" :key="good.uid">
          <CardSmall
            :img="good.img"
            :price="good.price"
            :name="good.name"
            :uid="good.uid"
          />
        </div>
      </div>
      <div class="order">
        <h2>Общая стоимость корзиночки</h2>
        <h3>{{ getTotalAmount }} ₽</h3>
        <button @click="showList">СРОЧНО КУПИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardSmall from "../components/CardSmall";

export default {
  name: "Basket",
  components: {
    CardSmall,
  },
  computed: {
    ...mapState(["inBasket"]),
    getTotalAmount() {
      return this.$store.getters.totalAmount;
    },
  },
  methods: {
    showList() {
      const list = [];
      this.inBasket.forEach((item) => {
        list.push(item.name);
      });
      alert(
        `Ваш список покупок: ${list.toString()}, Общая сумма покупок: ${
          this.getTotalAmount
        }`
      );
    },
  },
};
</script>

<style scoped>
.content {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 2fr, 1fr;
}
.goods {
  display: inline-block;
}
.order {
  justify-self: center;
  margin: 25px;
  margin-top: 0;
}
</style>
