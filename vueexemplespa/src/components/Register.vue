<template>
  <div>
    <div>
      <h1>Register</h1>
    </div>
    <form v-on:submit.prevent="enviaForm()">
      <div>Nom: <input required style="width: 300px" placeholder="Nom" /></div>
      <div>
        Email:
        <input required style="width: 300px" placeholder="Email" type="email" />
      </div>
      <div>
        Password: <input required style="width: 300px" placeholder="Password" />
      </div>
      <div>
        Repeteix password:
        <input required style="width: 300px" placeholder="Repeteix password" />
      </div>
      <div><input type="submit" value="Envia" /></div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    enviaForm: function () {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 10px;
}
</style>