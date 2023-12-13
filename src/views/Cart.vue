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
    getThumbnail(id){
      const curProduct = this.productsInfo.find((product) => product.id === id);
      return curProduct.thumbnail;
    }
  },
};
</script>

<template>
  <div>Cart</div>
  <ul v-for="product in products" :key="product.id">
    <li><img :src="getThumbnail(product.id)" alt="thumbnail"></li>
    <li>{{ getProductTitle(product.id) }}</li>
    <li>{{ product.quantity }}</li>
  </ul>
  <!-- <table>
    <thead>
      <tr>
        <th>Photo</th>
        <th>Product name</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <th>{{ product.thumbnail }}</th>
        <th>{{ getProductTitle(product.id) }}</th>
        <th>{{ product.quantity }}</th>
      </tr>
    </tbody>
  </table> -->
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
}
ul li {
  list-style: none;
  padding: 0 30px;
}
</style>
