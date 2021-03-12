<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ListViewer v-bind:llista="persones" v-on:element-clickat="elementTriat"></ListViewer>
    <div v-if="personaTriada">
      Has pitjat la persona {{personaTriada.nom}} amb codi {{personaTriada.codi}}
    </div>
    <ListViewer v-bind:llista="fruites" v-on:element-clickat="elementTriat"></ListViewer>
  </div>
</template>

<script>
import ListViewer from '@/components/ListViewer.vue'

export default {
  name: 'HelloWorld',
  components:{ListViewer},
  data:function(){
    return {
      persones:[{codi:'1',nom:'Pep'},{codi:'2',nom:'Toni'},{codi:'3',nom:'Miquel'}],
      fruites:[{codi:'1',nom:'Taronja'},{codi:'2',nom:'Síndria'},{codi:'3',nom:'Meló'}],
      personaTriada: null
    }
  },
  props: {
    msg: String
  },
  methods:{
    elementTriat:function(persona){
      this.personaTriada = persona;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
