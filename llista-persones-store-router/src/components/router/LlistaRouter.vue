<template>
  <div>
    <h1>{{ msg }}</h1>
    <fieldset>
      <legend>Persones:</legend>
      <div
        v-for="persona in $store.getters.getPersones"
        v-bind:key="persona.id"
      >
        <label
          >{{ persona.nom }} {{ persona.llin1 }} {{ persona.llin2 }}.
          Identificador: {{ persona.dni }}
          <input
            type="button"
            @click="eliminaPersona(persona)"
            value="Elimina"
          />
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "LlistaRouter",
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
    eliminaPersona: function (persona) {
      console.log("elimina persona");
      this.$store.commit("eliminaPersona", persona);
    },
  },
};
</script>