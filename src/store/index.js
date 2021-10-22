import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function(/* { ssrContext } */) {
  const Store = createStore({
    state: {
      dd: true,
      cards: {
        title: "Заголовок по умолчанию",
        content: "Контент по умолчанию",
        count: 3,
      },
    },
    getters: {
      dd(state) {
        return state.dd;
      },
      title(state) {
        return state.cards.title;
      },
      content(state) {
        return state.cards.content;
      },
      count(state) {
        return state.cards.count;
      },
    },
    mutations: {
      setDd(state, payload) {
        state.dd = payload;
      },
      setTitle(state, payload) {
        state.cards.title = payload;
      },
      setContent(state, payload) {
        state.cards.content = payload;
      },
      setCount(state, payload) {
        state.cards.count = payload;
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
