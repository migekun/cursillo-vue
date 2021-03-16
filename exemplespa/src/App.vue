<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div>
      <router-link to="/hola?salutacio=Bon dia!">Ves a hola</router-link>
    </div>
    <div>
      <router-link to="/adeu/a reveure">Ves a adéu</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
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
