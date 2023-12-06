<script>
export default {
  props: {
    product: {
      type: Object,
      reguired: true,
      default: () => ({
        id: -1,
        title: "DEFAULT",
        description: "DEFAULT",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        category: "animals",
        thumbnail:
          "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
      }),
    },
  },
  emits: ["onAddToCart"],
};
</script>

<template>
  <article class="pic">
    <section class="small-container">
      <img :src="product.thumbnail" alt="" />
      <h2>{{ product.title }}</h2>
      <p>Category: {{ product.category }}</p>
      <p>Description: {{ product.description }}</p>
      <h4>Price: {{ product.price }} $</h4>
      <h5>Rating: {{ product.rating }}</h5>
      <button @click="$emit('onAddToCart', product.id)">Add to Cart</button>
    </section>
  </article>
</template>

<style scoped>
.pic {
  width: calc((100% - (2 * 1vw) - 1vw) / 4);
  background-color: white;
  font-size: 0.8rem;
  margin-bottom: 1vw;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
}

.pic .small-container {
  margin: 0.4rem;
  display: flex;
  flex-direction: column;
}
.pic .small-container > img {
  width: 100%;
}

.pic .small-container h2{
  color: rgb(105, 143, 249);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
}

.small-container button {
  background-color: rgb(105, 143, 249);
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
}

.small-container button:hover {
  color: white;
  cursor: pointer;
}
</style>
