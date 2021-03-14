import Vue from 'vue'
import {store} from './store/store'
import App from './App.vue'

Vue.config.productionTip = false

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});

