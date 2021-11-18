import Vue from "vue";
import Vuex from "vuex";
import {
  SET_GOODS_LIST,
  ADD_TO_BASKET,
  CHANGE_BASKET_AMOUNT,
  TOGGLE_FAVOURITE,
} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    goods: [],
    inBasket: [],
  }),
  mutations: {
    [SET_GOODS_LIST](state, payload) {
      state.goods = payload;
    },
    [ADD_TO_BASKET](state, payload) {
      state.inBasket = payload;
    },
    [CHANGE_BASKET_AMOUNT](state, payload) {
      state.inBasket = payload;
    },
    [TOGGLE_FAVOURITE]: (state, payload) => {
      state.goods = payload;
    },
  },
  actions: {
    setGoodsList: ({ commit }, payload) => {
      commit("SET_GOODS_LIST", payload);
    },
    addToBasket: ({ commit, state }, payload) => {
      const newBasket = [...state.inBasket];
      const newPayload = { ...payload, amount: 1 };
      newBasket.push(newPayload);
      commit("ADD_TO_BASKET", newBasket);
    },
    changeBasketAmount: ({ commit, state }, payload) => {
      const newBasket = [...state.inBasket];
      const index = newBasket.findIndex((el) => el.uid === payload.uid);
      if (payload.operation === "+") {
        newBasket[index].amount += 1;
      } else {
        newBasket[index].amount -= 1;
      }
      if (newBasket[index].amount <= 0) {
        newBasket.splice(index, 1);
      }
      commit("CHANGE_BASKET_AMOUNT", newBasket);
    },
    toggleFavourite: ({ commit, state }, payload) => {
      const { isFavourite, uid } = payload;
      const newGoods = [...state.goods];
      const index = newGoods.findIndex((el) => el.uid === uid);
      newGoods[index].isFavourite = isFavourite;
      commit("TOGGLE_FAVOURITE", newGoods);
    },
  },
  getters: {
    totalAmount: (state) => {
      let sum = 0;
      state.inBasket.forEach((item) => {
        sum += item.price * item.amount;
      });
      return sum;
    },
    allGoodsCount: (state) => {
      return state.goods.length || 0;
    },
    basketGoodsCount: (state) => {
      return state.inBasket.length || 0;
    },
    getFavourites: (state, getters) => {
      if (getters.allGoodsCount) {
        return state.goods.filter((good) => good.isFavourite);
      }
      return 0;
    },
    favouritesCount: (state, getters) => {
      return getters.getFavourites.length || 0;
    },
    getGoodsAmountInBasket: (state) => (uid) => {
      const index = state.inBasket.findIndex((el) => el.uid === uid);
      if (index >= 0) {
        return state.inBasket[index].amount;
      } else return 0;
    },
    checkIsFavourite: (state) => (uid) => {
      const index = state.goods.findIndex((el) => el.uid === uid);
      return state.goods[index].isFavourite;
    },
  },
});
