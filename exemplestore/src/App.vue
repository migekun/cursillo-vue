<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Exemple d'store</h1>
    <div v-for="item in $store.getters.getLlista" v-bind:key="item">
      <span>{{item}}</span> <input type="button" value="Elimina element" @click="eliminaElement(item)">
    </div>
    <input type="text" v-model="texte">&nbsp;<input type="button" value="Afegeix" @click="afegeixElement()">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      texte: ''
    }
  },
  methods: {
    afegeixElement() {
      this.$store.commit("afegeixElement", this.texte);
    },
    eliminaElement(item){
      this.$store.commit("eliminaElement", item);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
