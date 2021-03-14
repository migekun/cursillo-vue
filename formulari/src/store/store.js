import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    persona: {
      nom: "",
      llin1: "",
      llin2: "",
      dni: ""
    },
    persones:[]
  },
  mutations: {
    novaPersona(state, persona){
      state.persones.push(persona);
      persona = {
        nom: "",
        llin1: "",
        llin2: "",
        dni: ""
      }  
    },
    eliminaPersona(state, persona) {
      state.persones.splice(state.persones.indexOf(persona), 1);
    },
  },
  getters: {
      persona: state => state.persona,
      persones: state => state.persones
  }
});
