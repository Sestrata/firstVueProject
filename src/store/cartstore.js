import { defineStore } from "pinia";
import { useUserStore } from "../store/userStore";

export const useCartStore = defineStore("cart", {
  state: () => ({ products: [] }),
  getters: {
    getProduct: (state) => {
      return (productId) =>
        state.products.find((prod) => prod.id === productId);
    },
  },
  actions: {
    addToCart(selectedId) {
      const userStore = useUserStore();
      if (userStore.isAuthenticated) {
        const productInCart = this.products.find(
          (prod) => prod.id === selectedId
        );
        if (!productInCart) {
          this.products.push({ id: selectedId, quantity: 1 });
        } else {
          productInCart.quantity += 1;
        }
      }
    },
    // changeQuantity(productId, event) {
    //   const qty = Number(event.target.value) ?? 0;
    //   const productInCart = this.products.find(prod => prod.id === productId);
    //   if (!productInCart)
    //     return;

    //   if (qty > 0) {
    //     productInCart.quantity = qty;
    //   }
    //   else {
    //     this.products = this.products.filter(prod => prod.id !== productId);
    //   }
    // },
  },
});
