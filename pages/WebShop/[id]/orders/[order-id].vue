<template>
    <div class="container mx-auto px-4 py-8">
      <nuxt-link to="/orders" class="text-blue-500 hover:underline mb-8 inline-block">
        &lt; Retour à la liste des commandes
      </nuxt-link>
      <div v-if="order" class="bg-white shadow-md rounded-lg p-6">
        <h1 class="text-3xl font-bold mb-4">Commande du {{ order.date.toLocaleDateString() }}</h1>
        <p class="text-gray-500 mb-4">Client ID: {{ order.clientId }}</p>
        <p class="text-gray-500 mb-4">Statut: {{ order.status }}</p>
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Articles commandés :</h2>
          <ul>
            <li v-for="product in order.products" :key="product.id" class="mb-2">
              <div class="flex justify-between">
                <span>{{ product.name }}</span>
                <span>{{ product.price.toFixed(2) }} €</span>
              </div>
            </li>
          </ul>
        </div>
        <p class="text-2xl font-semibold">Prix total: {{ order.totalPrice.toFixed(2) }} €</p>
      </div>
      <div v-else class="text-center text-gray-500">
        Chargement de la commande...
      </div>
    </div>
  </template>
  <script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import orders from '../../../../utils/orders';
  
    const route = useRoute();
    const order = ref(null);
  
    onMounted(() => {
      const orderId = route.params.orderid;
      order.value = orders.find(o => o.id === orderId);
    });
  </script>
  