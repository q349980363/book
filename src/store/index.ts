import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    back: function () {
      if (window.history.length <= 1) {
        router.replace("/");
      } else {
        router.back();
      }
    },
  },
  modules: {},
});
