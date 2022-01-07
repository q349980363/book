import { createStore } from "vuex";
import router from "../router";
import axios from "axios";
import _cheerio from "cheerio";

// const cheerio = require('cheerio');

export const http = axios;
export const cheerio = _cheerio;

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
