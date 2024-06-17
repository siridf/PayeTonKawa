import { defineStore } from 'pinia';
import { Products } from '~/models/product/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Products[]
  }),
  actions: {

  },
  getters: {

  }
});
