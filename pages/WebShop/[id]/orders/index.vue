<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Commandes</h1>
      <ul>
        <li v-for="(order, index) in orders" :key="index" class="mb-4">
          <NuxtLink :to="path + `/${order.id}`" class="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-lg font-semibold">Commande du {{ order.date.toLocaleDateString() }}</p>
              </div>
              <div>
                <p class="text-lg font-semibold">{{ order.totalPrice.toFixed(2) }} €</p>
                <p class="text-gray-500">Statut: {{ order.status }}</p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  <script setup lang="ts">
    import { orders } from '../../../../utils/orders';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const path = route.fullPath; 
  </script>