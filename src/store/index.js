import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedAsset: {},
  },
  mutations: {
    setSelectedAsset(state, item) {
      this.selectedAsset = item;
    },
  },
  getters: {
    selectedAsset(state) {
      return state.selectedAsset;
    },
  },
});
