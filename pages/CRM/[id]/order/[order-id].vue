<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 class="text-3xl font-bold mb-6">Détails de la commande #{{ order.id }}</h1>
      <div class="mb-6">
  <label for="status" class="block text-sm font-medium text-gray-700 mb-2">Statut de la commande</label>
  <select 
    id="status" 
    v-model="order.status" 
    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  >
    <option v-for="status in Object.values(EStatus)" :key="status" :value="status">
        {{ status }}
        </option>
    </select>
    </div>

    <div class="mb-4">
    <p class="text-gray-600">Client ID: {{ order.clientId }}</p>
    <p class="text-gray-600">Date de création: {{ formatDate(order.date) }}</p>
    <p class="text-gray-600 font-semibold">Total: {{ order.totalPrice.toFixed(2) }}€</p>
    </div>

    <h2 class="text-xl font-semibold mb-4">Produits de la commande</h2>
    <ul class="space-y-4">
    <li v-for="product in order.products" :key="product.id" class="border-b pb-4">
        <h3 class="font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">Prix: {{ product.price.toFixed(2) }}€</p>
        <p class="text-gray-600">Couleur: {{ product.color }}</p>
        <p class="text-gray-600">Description: {{ product.description }}</p>
    </li>
    </ul>

    <div class="grid grid-cols-2 gap-4">
        <button @click="goBack" class="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
            Retour à la liste des commandes
        </button>
        <button @click="updateOrderStatus" class="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
            Mettre a jour la commande
        </button>
    </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Order, EStatus } from '~/models/order/order'
import { orders } from '../../../../utils/orders'

const route = useRoute();
const router = useRouter();

const getOrder = orders.find(o => o.id === route.params.orderid)
console.log(getOrder)
const order = ref(getOrder ?? new Order('', route.params.id as string, [], EStatus.waiting, new Date(), 0))

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

const updateOrderStatus = () => {

    const index = orders.findIndex(o => o.id === route.params.orderid)
    console.log(index)

    if (index !== -1) {
        orders.splice(index, 1, order.value); 
    }

    console.log(orders)

    router.push('/CRM/' + route.params.id + '/order')
}

const goBack = () => {
  router.push('/CRM/' + route.params.id + '/order')
}
</script>
