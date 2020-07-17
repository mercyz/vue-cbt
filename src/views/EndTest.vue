<template>
  <div class="bg-white shadow-xl p-4 mx-auto w-1/3 mt-20 rounded-lg text-center">
    <h3 class="text-3xl text-purple-500">Are you sure ?</h3>
    <p class="mt-5 mb-16 text-lg max-w-sm mx-auto opacity-75">
      By clicking Yes you agree that you have done and ready to submit
      your work
    </p>
    <Button>YES, Submit</Button>
    <Button color="white">NO</Button>
  </div>
</template>

<script>
import Button from "../components/form/Button.vue";

export default {
  name: "EndTest",
  components: { Button }
};
</script>