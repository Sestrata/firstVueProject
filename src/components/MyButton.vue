<!-- <script>
export default {
  props: {
    btnColor: String,
  },
  emits: ["onClick"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;this.$emit('onClick', this.count);
    },
  },
};
</script>

<template>
  <button :style="{ background: btnColor }" @click="onClick">
    I've been clicked {{ count }} times
    <br>
    <slot /> !!!!!!<slot>HI</slot>-каквото се подаде м/у слот е дефолтна стойност!!!!!!
    <footer>
      <slot name="footer"></slot>
    </footer>
  </button>
</template>

<style scoped></style> -->
