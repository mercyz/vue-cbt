import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        component: require('../components/Authentication/Login'),
        name: "Login",
        meta: {title: "Login"},
    },
    {
        path: '/question',
		component: require('../components/Question.vue'),
		name: "Question",
		meta:{title: "Question"},
    },
];

export default new VueRouter({
    routes,
    mode: "history",
})