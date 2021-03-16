<template>

<div class="formulariPersona">
    <h1>{{msg}}</h1>
    <fieldset>
      <legend>Nova persona:</legend>
      <form @:submit.prevent="novaPersona()">
        <div>
          <label>Nom:</label>
          <input v-model="persona.nom" placeholder="Nom" required />
        </div>
        <div >
          <label>Llinatge 1:</label>
          <input v-model="persona.llin1" placeholder="Llinatge 1" required />
        </div>
        <div>
          <label>Llinatge 2:</label>
          <input v-model="persona.llin2" placeholder="Llinatge 2" required />
        </div>
        <div >
          <label>DNI:</label>
          <input v-model="persona.dni" placeholder="DNI" required/>
        </div>
        <div>
          <input type="submit" value="Desa" />
        </div>
      </form>
    </fieldset>
    <fieldset>
      <legend>Persones:</legend>
      <div v-for="persona in $store.getters.getRersones" v-bind:key="persona">
        <label>{{ persona.nom }} {{ persona.llin1 }} {{ persona.llin2 }}. Identificador: {{ persona.dni}}
          <input type="button" @click="eliminaPersona(persona)" value="Elimina"/>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>

export default {
  name: 'FormulariStore',
  props: {
    msg: String
  },
  data: function () {
    return {
      persona: {
        nom: "",
        llin1: "",
        llin2: "",
        dni: ""
      }
    };
  }, 
  methods: {
    novaPersona: function () {
      this.$store.commit("novaPersona", this.persona);
      this.persona = {
        nom: "",
        llin1: "",
        llin2: "",
        dni: ""
      }
    },
    eliminaPersona: function (persona) {
      this.$store.commit("eliminaPersona", persona);
    },
  },
}
</script>
