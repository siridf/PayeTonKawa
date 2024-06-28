import { defineStore } from 'pinia';
import { Products } from '~/models/product/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Products[]
  }),
  actions: {
    removeFromCart(index : number) {
        this.cart.splice(index, 1)
    }
  },
  getters: {

  }
});
