<template>
  <div>
    <ul>
      <li
        v-for="(option, index) in $props.options"
        :key="option.index"
        @click="choice(index)"
        class="py-3 my-2 flex border border-white rounded-lg px-3"
        :class="{
                'border-green-400': picked != null && $props.correct == index,
                'border-red-300': picked == index && $props.correct != index
            }"
      >
        <span
          class="rounded-lg flex-shrink-0 border inline-flex items-center justify-center border-gray-200 w-8 h-8 text-center"
        >{{ alphabets[index] }}.</span>
        <span class="flex-1 flex items-center px-3">{{option | capitalize }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import capitalize from "lodash/capitalize";
const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export default {
  name: "Options",
  props: {
    options: {
      type: Array
    },
    correct: {
      type: Number
    }
  },
  data: () => ({
    picked: null,
    alphabets
  }),
  methods: {
    choice(index) {
      if (this.picked !== null) return;
      this.picked = index;
      this.$emit("choice", this.picked);
    }
  },
  filters: {
    capitalize
  }
};
</script>