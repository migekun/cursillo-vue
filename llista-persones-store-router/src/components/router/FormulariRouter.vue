<template>
  <div>
    <h1>{{ msg }}</h1>
    <fieldset>
      <legend>Nova persona:</legend>
      <form v-on:submit.prevent="novaPersona()">
        <div>
          <label>Nom:</label>
          <input v-model="persona.nom" placeholder="Nom" required />
        </div>
        <div>
          <label>Llinatge 1:</label>
          <input v-model="persona.llin1" placeholder="Llinatge 1" required />
        </div>
        <div>
          <label>Llinatge 2:</label>
          <input v-model="persona.llin2" placeholder="Llinatge 2" required />
        </div>
        <div>
          <label>DNI:</label>
          <input v-model="persona.dni" placeholder="DNI" required />
        </div>
        <div>
          <input type="submit" value="Desa" />
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "FormulariRouter",
  props: {
    msg: String,
  },
  data: function () {
    return {
      persona: {
        nom: "",
        llin1: "",
        llin2: "",
        dni: "",
      },
    };
  },
  methods: {
    novaPersona: function () {
      console.log("novaPersona component");
      this.$store.commit("novaPersona", this.persona);
      this.persona = {
        nom: "",
        llin1: "",
        llin2: "",
        dni: "",
      };
    },
  },
};
</script>