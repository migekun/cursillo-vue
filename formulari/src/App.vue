<template>
  <div id="app">
    <Formulari msg="Formulari de proves amb data" />
    <FormulariStore msg="Formulari de proves AMB STORE" />
  </div>
</template>

<script>
import Formulari from './components/Formulari'
import FormulariStore from "./components/FormulariStore";
export default {
  name: "App",
  components: {
    Formulari,
    FormulariStore,
  },
};
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
