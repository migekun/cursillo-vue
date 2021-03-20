import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store.js";
import plugin from "./plugins/plugin.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(plugin);

Vue.config.productionTip = false;

store.commit("init");

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
