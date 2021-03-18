import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router.js";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  render: (h) => h(App)
}).$mount("#app");
