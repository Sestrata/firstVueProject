<script>
import Filters from "./components/Filters.vue";
import ProductCard from "./components/ProductCard.vue";
import { useCartStore } from "../../store/cartstore";
import { mapActions } from "pinia";
import { getAllProducts } from "../../dataProviders/products";
import { getAllCategories } from "../../dataProviders/categories";

export default {
  components: { Filters, ProductCard },
  data() {
    return {
      selectedFilter: "",
      products: [],
      categories: [],
    };
  },
  async created() {
    const promises = await Promise.all([getAllProducts(), getAllCategories()]);
    this.products = promises[0].products;
    this.categories = promises[1];
  },
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
    ...mapActions(useCartStore, ["addToCart"]),
  },
};
</script>

<template>
  <Filters
    :categories="categories"
    :activeItem="selectedFilter"
    @on-select="onFilterSelect"
  />

  <section class="flex-container">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="addToCart"
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
