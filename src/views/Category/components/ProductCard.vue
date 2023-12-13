<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../../store/cartstore";
import { useUserStore } from "../../../store/userStore";

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
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
      }),
    },
  },
  emits: ["onAddToCart"],
  computed: {
    ...mapState(useCartStore, ["getProduct"]),
    ...mapState(useUserStore, ["favouritesIds", "isAuthenticated"]),
    isDisabled() {
      const current = this.getProduct(this.product.id);
      if (!current) {
        return false;
      }
      return current.quantity >= this.product.stock;
    },
    isFavourites() {
      return this.favouritesIds.includes(this.product.id);
    },
  },
  methods: {
    ...mapActions(useUserStore, ["addToFavourites", "removeFromFavourites"]),
    onFavouritesClick() {
      if (this.isFavourites) {
        this.removeFromFavourites(this.product.id);
      } else {
        this.addToFavourites(this.product.id);
      }
    },
  },
};
</script>

<template>
  <article class="photo">
    <section class="small-container">
      <span v-if="isFavourites" class="favouritesIcon">💓</span>
      <img :src="product.thumbnail" alt="thumbnail" />
      <h2>{{ product.title }}</h2>
      <p>Category: {{ product.category }}</p>
      <p>Description: {{ product.description }}</p>
      <h4>Price: {{ product.price }} $</h4>
      <h5>Rating: {{ product.rating }}</h5>
      <button @click="$emit('onAddToCart', product.id)" :disabled="isDisabled">
        Add to Cart
      </button>
      <button
        v-if="isAuthenticated"
        @click="onFavouritesClick"
        :disabled="isDisabled"
      >
        {{ isFavourites ? "Remove from favourites" : "Add to favourites" }}
      </button>
    </section>
  </article>
</template>

<style scoped>
.photo {
  width: calc((100% - (2 * 1vw) - 1vw) / 4);
  background-color: white;
  font-size: 0.8rem;
  margin-bottom: 1vw;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
}
.photo .small-container {
  margin: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.photo .small-container > img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.photo .small-container h2 {
  color: rgb(105, 143, 249);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
}

.small-container button {
  background-color: rgb(105, 143, 249);
  border: none;
  border-radius: 6px;
  margin-bottom: 8px;
}

.small-container button:hover {
  color: white;
  cursor: pointer;
}
</style>
