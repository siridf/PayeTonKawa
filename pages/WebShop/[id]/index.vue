<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="font-bold text-xl text-gray-800">Paye Ton Kawa</NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink class="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</NuxtLink>
              <NuxtLink :to="'/WebShop/' + $route.params.id + '/cart'" class="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Panier</NuxtLink>
              <NuxtLink :to="'/WebShop/' + $route.params.id + '/orders'" class="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mes commandes</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-md overflow-hidden">
          <a @click.prevent="goToProductDetails(product.id)" class="cursor-pointer">
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.price }} €</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '../../../utils/product'

const router = useRouter()
const currentPath = router.currentRoute.value.path
const basePath = currentPath.split('/').slice(0, 3).join('/')

const goToProductDetails = (productId: string) => {
  const newPath = `${basePath}/product/${productId}`
  router.push(newPath)
}
</script>