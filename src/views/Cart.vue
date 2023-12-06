<script>
import { products } from "../constants/products";

export default {
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getProduct(id) {
      const curProduct = products.find((product) => product.id === id);
      return curProduct.title;
    },
  },
};
</script>

<template>
  <div>Cart</div>
  <ul>
    <li v-for="productId in cartProducts" :key="productId">
      {{ productId }} / {{ getProduct(productId) }}
    </li>
  </ul>
</template>

<style scoped></style>
