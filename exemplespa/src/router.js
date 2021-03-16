import Vue from 'vue';
import VueRouter from 'vue-router';
import hola from '@/components/Hola.vue'
import adeu from '@/components/Adeu.vue'

Vue.use(VueRouter);

let router = new VueRouter({ 
    base: '/',
    mode: 'history',
    routes: [
        { path: '/hola', component: hola },
        { path: '/adeu/:missatge', component: adeu },
    ]
});

export default router
