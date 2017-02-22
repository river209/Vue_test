import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);


import checklins from "./components/checklins.vue";
import additem from "./components/additem.vue";
import customList from "./components/customList.vue"



const routes = [{
    path: '/',
    component: customList
}, {
    path: '/checklins',
    component: checklins
}, {
    path: '/additem',
    component: additem
}];



const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: routes
})
export default router