import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    usuaris: [],
    persones: []
  },
  getters: {
    getUsuaris: function (state) {
      return state.usuaris;
    },
    getUsuariAutenticat(state, getters) {
      let email = sessionStorage.getItem("email");
      if (!email) return null;
      let usuari = getters.getUsuari(email);
      return usuari;
    },
    getUsuari: function (state) {
      return function (email) {
        let llista = state.usuaris.filter(function (user) {
          return user.email === email;
        });
        if (llista.length === 0) {
          return null;
        } else {
          return llista[0];
        }
      };
    },
    getPersona: function (state) {
      return function (dni) {
        state.usuaris.filter(function (pax) {
          return pax.dni === dni;
        });
      };
    },
    getPersones: function (state) {
      return state.persones;
    }
  },
  mutations: {
    init(state) {
      console.log("init -----------");
      console.log("email:" + sessionStorage.getItem("email"));
      try {
        state.usuaris = JSON.parse(localStorage.getItem("usuaris"));
      } catch (ex) {
        state.usuaris = [];
      }
      try {
        state.persones = JSON.parse(localStorage.getItem("persones"));
      } catch (ex) {
        state.persones = [];
      }
      if (state.usuaris == null) state.usuaris = [];
      if (state.persones == null) state.persones = [];
      console.log(state.usuaris);
      console.log(state.persones);
    },
    setUsuariAutenticat(state, email) {
      console.log("setUsuariAutenticat: " + email);
      sessionStorage.setItem("email", email);
      console.log("sessionStorage " + sessionStorage.getItem("email"));
    },
    removeUsuari: function (state, usuari) {
      let pos = 0;
      let index = null;
      for (let usu of state.usuaris) {
        if (usu.email === usuari.email) {
          index = pos;
          break;
        }
        pos++;
      }
      if (index != null) {
        state.usuaris.slice(pos, 1);
      }
    },
    updatePersones(state) {
      localStorage.setItem("persones", JSON.stringify(state.persones));
    },
    updateUsuari(state, usuari) {
      let llista = state.usuaris.filter(function (user) {
        return user.email === usuari.email;
      });
      if (llista.length === 0) {
        return;
      }
      llista[0].password = usuari.password;
      localStorage.setItem("usuaris", JSON.stringify(state.usuaris));
    },
    addUsuari(state, usuari) {
      let llista = state.usuaris.filter(function (user) {
        return user.email === usuari.email;
      });
      if (llista.length === 0) {
        state.usuaris.push(usuari);
      }
      localStorage.setItem("usuaris", JSON.stringify(state.usuaris));
    },
    addPersona(state, persona) {
      state.persones.push(persona);
      localStorage.setItem("persones", JSON.stringify(state.persones));
    },
    setLlinatge1(state, llinatge1) {
      state.llinatge1 = llinatge1;
    },
    setLlinatge2(state, llinatge2) {
      state.llinatge2 = llinatge2;
    },
    setDni(state, dni) {
      state.dni = dni;
    }
  }
});

export default store;
