<script>
import { mapActions } from "pinia";
import { useCartStore } from "../store/cartstore";
import ProductCard from "./Category/components/Productcard.vue";
import { getAllProducts } from "../dataProviders/products";

export default {
  components: { ProductCard },
  data() {
    return {
      highRatingProducts: [],
    };
  },
  async created() {
    try {
      const allProducts = await getAllProducts();
      this.filterHighRating(allProducts.products);
    } catch (error) {
      console.error("Error", error);
    }
  },
  methods: {
    filterHighRating(allProducts) {
      const productsCopy = [...allProducts];
      this.highRatingProducts = productsCopy.sort(
        (a, b) => b.rating - a.rating
      );
    },
    ...mapActions(useCartStore, ["addToCart"]),
  },
};
</script>

<template>
  <div class="divHome">
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quibusdam
      ullam placeat earum neque ex beatae deleniti odio expedita, libero dolorem
      aliquid. Labore saepe neque porro, voluptas sed earum molestias quam odio
      beatae necessitatibus est dolorem quis consequatur quaerat animi itaque
      placeat explicabo? Nemo, accusamus. Incidunt in minima odit porro?
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a aperiam
      possimus alias nostrum cumque inventore dolore quidem reiciendis non,
      velit, tempora dignissimos recusandae molestias perferendis eum laudantium
      veritatis incidunt consequatur voluptatum officia. Unde ab illum molestias
      rerum officia omnis deserunt sit nihil magnam doloribus exercitationem
      minima possimus dolor magni, sequi alias! Vitae et numquam repudiandae ut,
      optio aspernatur voluptatem? Sapiente quos repudiandae reiciendis
      laudantium beatae saepe eaque aliquid optio nulla, id architecto
      dignissimos amet impedit consequatur deleniti! Impedit temporibus vel
      officiis adipisci dolore recusandae, pariatur esse accusantium saepe
      perferendis magni voluptatum porro nulla? Numquam optio ab ipsum! Nobis,
      ipsum.
    </div>
  </div>

  <section class="flex-container">
    <ProductCard
      v-for="product in highRatingProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="addToCart"
    />
  </section>
</template>

<style scoped>
.divHome {
  margin-bottom: 60px;
  border-bottom: 1px solid #000;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
}
</style>
