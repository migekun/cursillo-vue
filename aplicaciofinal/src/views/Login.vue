<template>
  <div>
    <br />
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <div class="row form-group">
        <div class="col-sm-2">Email:</div>
        <div class="col-sm-6">
          <input
            type="email"
            required
            placeholder="john@doe.com"
            class="form-control"
            v-model="email"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-2">Password:</div>
        <div class="col-sm-6">
          <input
            type="password"
            required
            placeholder="-------"
            class="form-control"
            v-model="password"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <input type="submit" value="Enviar" class="btn btn-primary" />
        </div>
      </div>
      <div class="row">
        <div class="text-danger">
          <div v-for="(error, index) in errors" v-bind:key="index">
            {{ error }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: null,
      password: null,
      errors: [],
    };
  },
  created: function () {
    if (this.identificat()) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    login: function () {
      this.errors = [];
      let usuari = this.$store.getters.getUsuari(this.email);
      if (usuari) {
        if (usuari.password === this.password) {
          this.$store.commit("setUsuariAutenticat", usuari.email);
          this.$router.push({ name: "Home" });
        } else {
          this.errors.push("Clau incorrecta");
        }
      } else {
        this.errors.push("No existeix cap usuari amb aquest mail");
      }
    },
  },
};
</script>

<style scoped>
</style>