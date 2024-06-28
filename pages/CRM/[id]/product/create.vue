<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 class="text-2xl font-bold mb-6 text-center">Créer un nouveau produit</h2>
      <form @submit.prevent="createProduct()" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
          <input v-model="product.name" type="text" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Prix</label>
            <input v-model.number="product.price" type="number" id="price" step="0.01" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>

        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="product.description" id="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </div>

        <div>
            <label for="color" class="block text-sm font-medium text-gray-700">Couleur</label>
            <input v-model="product.color" type="text" id="color" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>

        <div>
            <label for="stock" class="block text-sm font-medium text-gray-700">Stock</label>
            <input v-model.number="product.stock" type="number" id="stock" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>

        <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Créer le produit
        </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Products } from '~/models/product/product'
import { products } from '../../../../utils/product'


const route = useRoute();
const router = useRouter(); 
const product = ref(new Products('', new Date(), '', 0, '', '', 0))

const createProduct = () => {
    const newProduct = new Products(
        (Number(products[products.length - 1].id + 1)).toString(), 
        new Date(),
        product.value.name,
        product.value.price,
        product.value.description,
        product.value.color,
        product.value.stock
    )

    products.push(newProduct)
    router.push(`/CRM/${route.params.id}/product`)
}
</script>