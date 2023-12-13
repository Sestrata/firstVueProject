<script>
import { getProduct } from "../dataProviders/products";
import { useCartStore } from "../store/cartstore";
import { mapState } from "pinia";

export default {
  data() {
    return {
      productsInfo: [],
    };
  },
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  computed: {
    ...mapState(useCartStore, ["products"]),
  },
  async created() {
    const promises = [];
    this.products.forEach((product) => {
      promises.push(getProduct(product.id));
    });
    this.productsInfo = await Promise.all(promises);
  },
  methods: {
    getProductTitle(id) {
      const curProduct = this.productsInfo.find((product) => product.id === id);
      return curProduct.title;
    },
    getThumbnail(id) {
      const curProduct = this.productsInfo.find((product) => product.id === id);
      return curProduct.thumbnail;
    },
  },
};
</script>

<template>
  <h1 class="cart">CART</h1>
  <ul v-for="product in products" :key="product.id">
    <li><img :src="getThumbnail(product.id)" alt="thumbnail" /></li>
    <li>{{ getProductTitle(product.id) }}</li>
    <li>{{ product.quantity }}</li>
  </ul>
</template>

<style scoped>
.cart {
  margin-bottom: 60px;
  text-align: center;
}
ul {
  display: flex;
  flex-direction: row;
}
ul li {
  list-style: none;
  margin: 0 auto;
}
ul li img {
  width: 5rem;
  height: auto;
  border-radius: 100%;
  overflow: hidden;
  margin: 0px auto;
}
</style>
