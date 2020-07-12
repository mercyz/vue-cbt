<template>
  <div id="app">
    <navigation-bar/>
    <!-- <router-view></router-view> -->
    <question/>
  </div>
</template>

<script>
// import  Login from './components/Authentication/Login.vue';
import  NavigationBar from './components/NavigationBar.vue';
import  Question from './components/Question.vue';
export default {
  name: 'App',
  components: { Question, NavigationBar }
}
</script>
<style>
  body{
    background: whitesmoke;
  }
</style>

