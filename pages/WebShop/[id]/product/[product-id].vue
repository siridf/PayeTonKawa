<template>
    <div v-if="product" class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 class="text-4xl font-bold mb-4">{{ product.name }}</h1>
          <p class="text-gray-500 text-xl mb-4">{{ product.price }} €</p>
          <p class="text-gray-700 mb-8">{{ product.description }}</p>
          <div class="flex items-center mb-8">
            <span class="text-gray-700 mr-4">Couleur : {{ product.color }}</span>
            <span class="text-gray-700">Stock : {{ product.stock }}</span>
          </div>
          <NuxtLink :to="'/WebShop/' +route.params.id" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="AddProductToCart()">
            Ajouter au panier
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto px-4 py-8">
      <p class="text-xl text-gray-700">Produit non trouvé</p>
    </div>
  </template>

  <script setup lang="ts">
    import { products } from '../../../../utils/product'
    import { useCartStore } from '~/store/cartStore';
    import { storeToRefs } from 'pinia';

    const { cart } = storeToRefs(useCartStore())
    
    const route = useRoute()
    const product = products.find(prod => prod.id === route.params.productid)

    function AddProductToCart() {
        if(product) {
            cart.value.push(product)
        }
    }
  </script>