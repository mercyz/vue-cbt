<template>
  <button
    class="inline-block cursor-pointer px-4 py-3 tracking-widest rounded-lg mr-4 shadow hover:shadow-xl duration-300 transition ease-in-out"
    :class="dynamicClass"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {
    dynamicClass() {
      if (this.$attrs.color === "white") return "bg-white text-purple-400";

      return "bg-purple-400 text-white";
    }
  }
};
</script>