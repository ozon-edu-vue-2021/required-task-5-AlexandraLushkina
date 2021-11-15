import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    countGoods: 0,
    goods: [],
    inBasket: [],
  }),
  mutations: {
    addGoodToCounter: (state) => {
      state.countGoods += 1;
    },
    setGoodsList: (state, payload) => {
      state.goods = payload;
    },
    addToBasket: (state, payload) => {
      state.inBasket.push(payload);
    },
  },
  getters: {
    totalAmount: (state) => {
      let sum = 0;
      state.inBasket.forEach((item) => {
        sum += item.price;
      });
      return sum;
    },
  },
});
