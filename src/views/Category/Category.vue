<script>
import Filters from "./components/Filters.vue";
import { products } from "../../constants/products";
import ProductCard from "./components/ProductCard.vue";

export default {
  components: { Filters, ProductCard },
  data() {
    return {
      selectedFilter: "",
      products,
    };
  },
  emits: ["onAddToCart"],
  computed: {
    displayProducts() {
      if (this.selectedFilter === "") {
        return this.products;
      }
      return this.products.filter(
        (product) => product.category === this.selectedFilter
      );
    },
  },
  methods: {
    onFilterSelect(selected) {
      this.selectedFilter = selected;
    },
  },
};
</script>

<template>
  <Filters :activeItem="selectedFilter" @on-select="onFilterSelect" />
  <section class="flex-container">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="$emit('onAddToCart', $event)"
    />
  </section>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
}
</style>
