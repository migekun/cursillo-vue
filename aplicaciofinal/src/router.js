import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Usuaris from "@/views/Usuaris.vue";
import Persones from "@/views/Persones.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "Buida",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/persones",
      name: "Persones",
      component: Persones
    },
    {
      path: "/usuaris",
      name: "Usuaris",
      component: Usuaris
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  console.log(Vue);
  console.log($cookies);
  let autenticat = $cookies.get("email");
  console.log(autenticat);
  console.log(to.name);
  if (to.name === "Login" || to.name === "Register") {
    if (autenticat) {
      next({ name: "Home" });
    }
  } else {
    if (!autenticat) {
      next({ name: "Login" });
    }
  }
  console.log("segueix");
  next();
});*/

export default router;
