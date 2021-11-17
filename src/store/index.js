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
    toggleFavourite: (state, payload) => {
      const { isFavourite, uid } = payload;
      const newGoods = [...state.goods];
      const index = newGoods.findIndex((el) => el.uid === uid);
      newGoods[index].isFavourite = isFavourite;
      state.goods = newGoods;
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
    allGoodsCount: (state) => {
      return state.goods.length || 0;
    },
    getFavourites: (state, getters) => {
      if (getters.allGoodsCount) {
        return state.goods.filter((good) => good.isFavourite);
      }
      return 0;
    },
    favouritesCount: (state, getters) => {
      return getters.getFavourites.length;
    },
  },
});
