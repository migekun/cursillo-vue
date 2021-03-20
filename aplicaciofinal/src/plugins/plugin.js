export default {
  install(Vue) {
    Vue.mixin({
      created: function () {
        //
      },
      props: {},
      methods: {
        identificat: function () {
          console.log(sessionStorage.getItem("email"));
          return sessionStorage.getItem("email") != null;
        },
        getPersona: function (dni) {
          let persones = this.$store.getters.getPersones;
          persones = persones.filter(function (pax) {
            return pax.dni === dni;
          });
          return persones.length === 0 ? null : persones[0];
        }
      }
    });

    Vue.prototype.metodeGlobal = function () {
      return "això és un mètode global";
    };
  }
};
