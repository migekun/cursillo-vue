<template>

<div class="formulariPersona">
    <h1>{{msg}}</h1>
    <fieldset>
      <legend>Nova persona:</legend>
      <form v-on:submit.prevent="novaPersona()">
        <div class="linia">
          <label>Nom:</label>
          <input v-model="persona.nom" placeholder="Nom" required />
        </div>
        <div class="linia">
          <label>Llinatge 1:</label>
          <input v-model="persona.llin1" placeholder="Llinatge 1" required />
        </div>
        <div class="linia">
          <label>Llinatge 2:</label>
          <input v-model="persona.llin2" placeholder="Llinatge 2" required />
        </div>
        <div class="linia">
          <label>DNI:</label>
          <input v-model="persona.dni" placeholder="DNI" required/>
        </div>
        <div class="linia">
          <input type="submit" value="Desa" />
        </div>
      </form>
    </fieldset>
    <fieldset>
      <legend>Persones:</legend>
      <div class="linia" v-for="persona in persones" :key="persona.dni">
        <label>{{ persona.nom }} {{ persona.llin1 }} {{ persona.llin2 }}. Identificador: {{ persona.dni}}
          <input type="button" v-on:click="eliminaPersona(persona)" value="Elimina"/>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Formulari',
  props: {
    msg: String
  },
  data: function () {
    return {
      persones: [],
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
      this.persones.push(this.persona);
      this.persona = {
        nom: "",
        llin1: "",
        llin2: "",
        dni: ""
      }
    },
    eliminaPersona: function (persona) {
      this.persones.splice(this.persones.indexOf(persona), 1);
    },
  },
}
</script>
