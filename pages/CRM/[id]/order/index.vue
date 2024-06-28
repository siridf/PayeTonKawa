<template>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-6">Liste des Commandes</h1>
      <ul class="space-y-6">
        <li v-for="order in orders" :key="order.id" class="bg-white shadow rounded-lg p-6" @click="goToOrderDetails(order.id)">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Commande #{{ order.id }}</h2>
            <span :class="{
              'bg-green-100 text-green-800': order.status === EStatus.ready,
              'bg-yellow-100 text-yellow-800': order.status === EStatus.preparation,
              'bg-blue-100 text-blue-800': order.status === EStatus.waiting
            }" class="px-2 py-1 rounded-full text-sm font-semibold">
              {{ order.status }}
            </span>
          </div>
          <p class="text-gray-600">Client ID: {{ order.clientId }}</p>
          <p class="text-gray-600">Date: {{ formatDate(order.date) }}</p>
          <p class="text-gray-600">Total: {{ order.totalPrice.toFixed(2) }}€</p>
          <div class="mt-4">
            <h3 class="font-semibold mb-2">Produits:</h3>
            <ul class="list-disc list-inside">
              <li v-for="product in order.products" :key="product.id" class="text-gray-600">
                {{ product.name }} - {{ product.price.toFixed(2) }}€
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <script setup lang="ts">
  import { EStatus } from "~/models/order/order";
  import { orders } from '../../../../utils/orders'; 

    const router = useRouter()
    const currentPath = router.currentRoute.value.path
    const basePath = currentPath.split('/').slice(0, 3).join('/')

  const goToOrderDetails = (orderId : string) => {
    const newPath = `${basePath}/order/${orderId}`
    router.push(newPath)
  } 
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
  </script>