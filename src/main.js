import Vue from 'vue';
import App from './components/App.vue';
import router from './router.js';
import VueResource from "vue-resource";

Vue.use(VueResource);
//import VueRouter from "vue-router";



//import VueResource from "vue-resource";

Vue.config.debug = true;
//Vue.use(VueRouter);
//Vue.use(VueResource);


const app = new Vue({
    //el: '#app',
    router: router,
    render: h => h(App),

}).$mount('#app')