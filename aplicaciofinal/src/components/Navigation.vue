<template>
  <div>
    <div class="text-center" v-if="!identificat()">
      <router-link to="/">Login</router-link>
      &nbsp;-&nbsp;
      <router-link to="/register">Register</router-link>
    </div>
    <div class="text-center" v-if="identificat()">
      <div>
        Usuari: {{ usuariAutenticat.email }}
        <a href="" @click="logout()">Logout</a>
      </div>
      <div>
        <router-link to="/home">Home</router-link>
        &nbsp;-&nbsp;
        <router-link to="/usuaris">Manteniment d'usuaris</router-link>
        &nbsp;-&nbsp;
        <router-link to="/persones">Manteniment de persones</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    logout: function () {
      sessionStorage.removeItem("email");
      this.$router.push("/login");
    },
  },
  computed: {
    usuariAutenticat: function () {
      return this.$store.getters.getUsuariAutenticat;
    },
  },
};
</script>

<style scoped>
</style>