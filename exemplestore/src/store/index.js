import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    llista:[]
  },
  getters: {
    getLlista: state => {
      return state.llista;
    }
  },
  mutations: {
    afegeixElement:function(state, element){
      state.llista.push(element);
    },
    eliminaElement:function(state, element){
      let posicio = state.llista.indexOf(element);
      state.llista.splice(posicio, 1);
    }
  }
})
