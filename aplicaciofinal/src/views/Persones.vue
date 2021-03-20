<template>
  <div>
    <br />
    <h1>Persones</h1>
    <div>
      <ul>
        <li v-for="(persona, index) in persones" :key="index">
          <a href="" @click.prevent="carregaPersona(persona)">
            {{ persona.nom }} {{ persona.llinatge1 }} {{ persona.llinatge2 }}
          </a>
        </li>
        <li>
          <a href="" @click.prevent="novaPersona()">Crea una nova persona</a>
        </li>
      </ul>
    </div>
    <form @submit.prevent="desa()" v-if="persona">
      <div class="row form-group">
        <div class="col-sm-4">Nom:</div>
        <div class="col-sm-6">
          <input
            type="text"
            required
            placeholder="nom"
            class="form-control"
            v-model="persona.nom"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">Llinatge 1:</div>
        <div class="col-sm-6">
          <input
            type="text"
            required
            placeholder="1r llinatge"
            class="form-control"
            v-model="persona.llinatge1"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">Llinatge 2:</div>
        <div class="col-sm-6">
          <input
            type="text"
            required
            placeholder="2n llinatge"
            class="form-control"
            v-model="persona.llinatge2"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">Email:</div>
        <div class="col-sm-6">
          <input
            type="email"
            required
            placeholder="john@doe.com"
            class="form-control"
            v-model="persona.email"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">DNI:</div>
        <div class="col-sm-6">
          <input
            type="text"
            required
            :disabled="!nou"
            placeholder="000000000R"
            class="form-control"
            v-model="persona.dni"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-4">Sexe:</div>
        <div class="col-sm-8">
          <input
            type="radio"
            v-model="persona.sexe"
            value="home"
            id="home"
          /><label for="home">Home</label>
          <input
            type="radio"
            v-model="persona.sexe"
            value="dona"
            id="dona"
          /><label for="dona">Dona</label>
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
      persona: null,
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
    carregaPersona: function (persona) {
      this.nou = false;
      this.persona = persona;
    },
    eliminar: function () {
      this.$store.commit("eliminaPersona", this.persona);
    },
    desa: function () {
      if (this.nou) {
        let personaAux = this.getPersona(this.persona.dni);
        if (personaAux === null) {
          this.$store.commit("addPersona", this.persona);
        } else {
          alert("Una persona amb aquest DNI ja està a la llista.");
        }
      } else {
        this.$store.commit("updatePersones", this.persona);
      }
    },
    novaPersona: function () {
      this.nou = true;
      this.persona = {};
    },
  },
  computed: {
    persones: function () {
      return this.$store.getters.getPersones;
    },
  },
};
</script>

<style scoped>
</style>