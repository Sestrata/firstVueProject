<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
};
</script>

<template>
  <button @click="onClick">I've been clicked {{ count }}</button>
</template>

<style scoped></style>
