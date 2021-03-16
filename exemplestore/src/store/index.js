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
    },
    eliminaPersona(state, persona) {
      state.persones.splice(state.persones.indexOf(persona), 1);
    }
  },
  getters: {
    getPersones: (state) => {
      return state.persones;
    }
  }
});
