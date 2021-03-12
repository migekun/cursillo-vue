<template>
    <div>
        <div v-for="element in llista" :key="element.codi">
            {{element.nom}}   [{{element.codi}}] <input type="button" @click="clickElement(element)" v-bind:value="element.nom">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListViewer',
        props:['llista'],
        methods:{
            clickElement:function(element){
                this.$emit('element-clickat',element);
            }
        }        
    }
</script>

<style scoped>

</style>