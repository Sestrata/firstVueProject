<script>
import { getProduct } from "../dataProviders/products";
import { useCartStore } from "../store/cartstore";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      productsInfo: {},
    };
  },
  computed: {
    ...mapState(useCartStore, ["products"]),
    totalSum() {
      let sum = 0;
      this.products.forEach((product) => {
        sum += (this.productsInfo[product.id]?.price ?? 0) * product.quantity;
      });
      return sum;
    },
  },
  async created() {
    const promises = [];
    this.products.forEach((product) => {
      promises.push(getProduct(product.id));
    });
    const allProducts = await Promise.all(promises);
    allProducts.forEach((product) => {
      this.productsInfo[product.id] = product;
    });
  },
  methods: {
    ...mapActions(useCartStore, ["changeQuantity"]),
  },
};
</script>

<template>
  <h1 class="cart">CART</h1>
  <article class="container">
    <ul v-for="product in products" :key="product.id">
      <li><img :src="productsInfo[product.id].thumbnail" alt="thumbnail" /></li>
      <li>
        {{ productsInfo[product.id].title }}:
        <p>{{ productsInfo[product.id].price }} $</p>
      </li>
      <li>
        <input
          type="number"
          :value="product.quantity"
          @input="changeQuantity(product.id, $event)"
        />
      </li>
      <li>Price: {{ productsInfo[product.id].price * product.quantity }} $</li>
    </ul>
    <div v-if="products.length > 0" class="totalSum">
      Total: {{ totalSum }} $
    </div>
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
  margin: 0 30px;
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
  border-radius: 100%;
  overflow: hidden;
  margin: 0px auto;
}

.totalSum {
  text-align: right;
  padding-right: 40px;
  font-weight: bold;
  font-size: large;
  margin: 0;
}
</style>
