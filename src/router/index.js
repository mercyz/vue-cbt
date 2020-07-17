import Vue from "vue";
import VueRouter from "vue-router";
import EndTest from "../views/EndTest.vue";
import Question from "../components/Question.vue";
import Welcome from "../components/Welcome.vue";
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    component: Welcome,
    name: "Welcome",
    meta: { title: "Welcome" },
  },
  {
    path: "/question",
    component: Question,
    name: "Question",
    meta: { title: "Question" },
  },
  {
    path: "/end-test",
    component: EndTest,
    name: "Finished",
    meta: { title: "Finished Testing" },
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
