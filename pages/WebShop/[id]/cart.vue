<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-center">Mon panier</h1>
      <div class="max-w-3xl mx-auto">
        <div v-for="(product, index) in cart" :key="product.id" class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div>
              <p class="text-lg font-semibold">{{ product.name }}</p>
              <p class="text-gray-500">{{ product.price }} €</p>
            </div>
          </div>
          <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-600 focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <button @click="createOrder()" v-if="cart.length > 0" class="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto">
          Passer commande
        </button>
        <p v-else class="text-center text-gray-500">Votre panier est vide.</p>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import { useCartStore } from '../../../store/cartStore';
    import { storeToRefs } from 'pinia';
    import {orders} from '../../../utils/orders'
    import { Order, EStatus } from '~/models/order/order';
  
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    const route = useRoute();
    const router = useRouter()
  
    const removeFromCart = (index: number) => {
      cartStore.removeFromCart(index);
    };

    const createOrder = () => {
      const idOrder = Number(orders[orders.length -1].id) + 1; 
      let totalPrice = 0; 
      for (const product of cart.value) {
        totalPrice += product.price; 
      }
      const newOrder = new Order(idOrder.toString(), route.params.id as string, cart.value, EStatus.waiting, new Date(), totalPrice)
      orders.push(newOrder); 
      router.push(`/WebShop/${route.params.id}`)
    }
  </script>