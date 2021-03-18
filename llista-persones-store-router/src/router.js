import Vue from "vue";
import VueRouter from "vue-router";
import formulari from "@/components/router/FormulariRouter.vue";
import llista from "@/components/router/LlistaRouter.vue";
import home from "@/components/router/HomeRouter.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: home },
    { path: "/formulari", component: formulari },
    { path: "/llista", component: llista }
  ]
});

export default router;
