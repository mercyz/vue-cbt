<template>
  <div class="w-full px-3 py-5 flex justify-between bg-white wg-nav">
    <div>
      <a href="#">Brainicas</a>
    </div>
    <div class="flex items-center">
      <span class="mx-4">00:30:01</span>
      <Button color="white" @click="endTest">SUBMIT</Button>
    </div>
  </div>
</template>

<script>
import Button from "./form/Button";

export default {
  name: "NavigationBar",
  components: { Button },
  methods: {
    endTest() {
      this.$router.replace({ name: "Finished" });
    }
  }
};
</script>