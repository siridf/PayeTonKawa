<template>
    <div class="p-8">
        <ul class="space-y-4 mb-6">
            <li v-for="product in products" :key="product.id" class="bg-white shadow rounded-lg p-4" @click="goToProductDetails(product.id)">
                <h2 class="text-xl font-semibold">{{ product.name }}</h2>
                <p class="text-gray-600">Prix: {{ product.price }}€</p>
                <p class="text-gray-600">Couleur: {{ product.color }}</p>
                <p class="text-gray-600">Stock: {{ product.stock }}</p>
                <p class="text-sm text-gray-500 mt-2">{{ product.description }}</p>
                <button 
                    @click="deleteProduct(product.id)" 
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Supprimer
                </button>
            </li>
        </ul>

        <NuxtLink 
            :to="'/CRM/' + $route.params.id + '/product/create'" 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Créer un nouveau produit
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import {products} from '../../../../utils/product'

    const router = useRouter()
    const currentPath = router.currentRoute.value.path
    const basePath = currentPath.split('/').slice(0, 3).join('/')

    const goToProductDetails = (productId: string) => {
        const newPath = `${basePath}/product/${productId}`
        router.push(newPath)
    }

    const deleteProduct = (productId: string) => {
        const index = products.findIndex(p => p.id === productId);
        products.splice(index, 1);
        const newPath = `${basePath}`;
        router.push(newPath);
    }
</script>