import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persones: []
  },
  mutations: {
    novaPersona(state, persona) {
      state.persones.push(persona);
      localStorage.setItem("persones", JSON.stringify(state.persones));
    },
    eliminaPersona(state, persona) {
      state.persones.splice(state.persones.indexOf(persona), 1);
      localStorage.setItem("persones", JSON.stringify(state.persones));
    },
    initialiseStore(state) {
      console.log("Init data");
      //localStorage.clear();
      if (localStorage.getItem("persones") != null) {
        state.persones = JSON.parse(localStorage.getItem("persones") || "[]");
      }
    }
  },
  getters: {
    getPersones: (state) => {
      console.log("get Persones local: " + localStorage.getItem("persones"));
      return state.persones;
    }
  }
});
