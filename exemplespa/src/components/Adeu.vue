<template>
    <div>
        <h1>Aquest és el component adéu</h1>
        <h2>{{$route.params.missatge}}</h2>
        <input type="button" value="Ves a hola" @click="bota()">
    </div>
</template>

<script>
    export default {
        methods:{
            bota:function(){
                this.$router.push('/hola?salutacio=Hola, venc del component adeu');
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>