<template>
  <div>
    <br />
    <h1>Registre</h1>
    <form @submit.prevent="desa()">
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
      <div class="row form-group">
        <div class="col-sm-2">Repeat password:</div>
        <div class="col-sm-6">
          <input
            type="password"
            required
            placeholder="-------"
            class="form-control"
            v-model="password_cp"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <input type="submit" value="Enviar" class="btn btn-primary" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center text-danger">
          {{ error }}
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
      password_cp: null,
      error: null,
    };
  },
  created: function () {
    if (this.identificat()) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    desa: function () {
      if (this.password !== this.password_cp) {
        this.error = "Els passwords no coincideixen.";
      }
      let usuari = this.$store.getters.getUsuari(this.email);
      if (usuari == null) {
        this.$store.commit("addUsuari", {
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "Login" });
      } else {
        this.error = "Ja existeix un usuari amb aquest email.";
      }
    },
  },
};
</script>

<style scoped>
</style>