<template>
  <div id="app">
    <navigation-bar />
    <div>
      <router-view name="default"></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: { NavigationBar }
};
</script>

<style>
body {
  background: whitesmoke;
}
</style>

