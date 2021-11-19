<template>
  <div class="container">
    <h2 class="header">Вот ваши покупочки</h2>
    <div class="content">
      <div class="goods">
        <div v-if="inBasket.length">
          <div v-for="good in inBasket" :key="good.uid">
            <CardSmall
              :img="good.img"
              :price="good.price"
              :name="good.name"
              :uid="good.uid"
            />
          </div>
        </div>
        <div v-else>
          <h3 class="empty-basket">Пока ничего не добавлено :(</h3>
        </div>
      </div>
      <div class="order">
        <h2>Общая стоимость корзиночки</h2>
        <h3>{{ totalAmount }} ₽</h3>
        <button class="button" @click="showList">СРОЧНО КУПИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CardSmall from "../components/CardSmall";

export default {
  name: "Basket",
  components: {
    CardSmall,
  },
  computed: {
    ...mapState(["inBasket"]),
    ...mapGetters(["totalAmount"]),
  },
  methods: {
    showList() {
      const list = [];
      this.inBasket.forEach((item) => {
        list.push(item.name);
      });
      if (this.inBasket.length) {
        alert(
          `Ваш список покупок: ${list.toString()}, Общая сумма покупок: ${
            this.getTotalAmount
          }`
        );
      } else {
        alert(`Ваш список покупок пока пуст, ни в чем себе не отказывайте ;)`);
      }
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
.button {
  background-color: #e53558;
  color: #fff;
  cursor: pointer;
  font-family: "GTEestiDisplay", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  border: none;
  border-radius: 8px;
  padding: 10px;
}
</style>
