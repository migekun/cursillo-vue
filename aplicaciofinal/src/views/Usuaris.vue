<template>
  <div>
    <br />
    <h1>Usuaris</h1>
    <div>
      <ul>
        <li v-for="(usuari, index) in usuaris" :key="index">
          <a href="" @click.prevent="carregaUsuari(usuari)">{{
            usuari.email
          }}</a>
        </li>
        <li><a href="" @click.prevent="nouUsuari()">Crea un nou usuari</a></li>
      </ul>
    </div>
    <form @submit.prevent="desa()" v-if="usuari">
      <div class="row form-group">
        <div class="col-sm-2">Email:</div>
        <div class="col-sm-6">
          <input
            type="email"
            :disabled="!nou"
            required
            placeholder="john@doe.com"
            class="form-control"
            v-model="usuari.email"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-2">Password:</div>
        <div class="col-sm-6">
          <input
            type="text"
            required
            placeholder="-------"
            v-model="usuari.password"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <input type="submit" value="Desar" class="btn btn-primary" />
          &nbsp;&nbsp;
          <input
            v-if="!nou"
            type="submit"
            value="Eliminar"
            class="btn btn-primary"
          />
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
      usuari: null,
      nou: false,
      errors: [],
    };
  },
  created: function () {
    if (!this.identificat()) {
      this.$router.push({ name: "/login" });
    }
  },
  methods: {
    carregaUsuari: function (usuari) {
      this.nou = false;
      this.usuari = usuari;
    },
    eliminar: function () {
      this.$store.commit("eliminaUsuari", this.usuari);
    },
    desa: function () {
      if (this.nou) {
        this.$store.commit("addUsuari", this.usuari);
      } else {
        this.$store.commit("updateUsuari", this.usuari);
      }
    },
    nouUsuari: function () {
      this.nou = true;
      this.usuari = { email: "", password: "" };
    },
  },
  computed: {
    usuaris: function () {
      return this.$store.getters.getUsuaris;
    },
  },
};
</script>

<style scoped>
</style>