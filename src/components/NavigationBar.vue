<template>
  <div class="w-full px-3 py-5 flex justify-between bg-white wg-nav">
    <div>
      <a href="#">Brainicas</a>
    </div>
    <div class="flex items-center">
      <Timer class="mx-3" />
      <Button color="white" @click="endTest">SUBMIT</Button>
    </div>
  </div>
</template>

<script>
import Button from "./form/Button";
import Timer from "./Timer";

export default {
  name: "NavigationBar",
  components: { Button, Timer },
  methods: {
    endTest() {
      this.$router.replace({ name: "Finished" });
    }
  }
};
</script>