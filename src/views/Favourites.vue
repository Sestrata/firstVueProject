<script>
import { useUserStore } from "../store/userStore";
import { mapState } from "pinia";
import { getAllProducts } from "../dataProviders/products";

export default {
  data() {
    return {
      productsFavourites: [],
    };
  },
  computed: {
    ...mapState(useUserStore, ["likesIds"]),
  },
  async created() {
    try {
      const allProducts = await getAllProducts();
      this.filterFavourites(allProducts.products);
    } catch (error) {
      console.error("Error", error);
    }
  },
  methods: {
    filterFavourites(allProducts) {
      this.productsFavourites = allProducts.filter(product => {
        return this.likesIds.includes(product.id);
      });
    },
  },
};
</script>

<template>
  <h1 class="cart">FAVOURITES</h1>
  <article v-if="productsFavourites.length > 0" class="container">
    <ul v-for="product in productsFavourites" :key="product.id">
      <li>
        <img :src="product.thumbnail" alt="thumbnail" />
      </li>
      <li>
        {{ product.title }}:
        <p>{{ product.price }} $</p>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.cart {
  margin-bottom: 60px;
  text-align: center;
}
.container {
  margin: 0 auto;
  border-bottom: 1px solid #000;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

ul li {
  list-style: none;
  margin: 0 10px;
}

.container :not(p),
.container :not(input) {
  font-weight: bold;
}

.container p,
.container input {
  font-weight: normal;
}

ul li img {
  width: 5rem;
  height: auto;
  border-radius: 6px;
  overflow: hidden;
  margin: 0px auto;
}
</style>
