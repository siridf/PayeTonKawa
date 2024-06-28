<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <NuxtLink 
            :to="'/CRM/' + $route.params.id + '/product'"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
            <h2 class="text-xl font-semibold text-blue-500 mb-2">Espace Produit</h2>
            <p class="text-gray-600">Gérez vos produits et votre inventaire</p>
        </NuxtLink>

        <NuxtLink 
            :to="'/CRM/' + $route.params.id + '/order'"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
            <h2 class="text-xl font-semibold text-blue-500 mb-2">Espace Commande</h2>
            <p class="text-gray-600">Suivez et gérez les commandes clients</p>
        </NuxtLink>

        <NuxtLink 
            v-if="currentUser && currentUser.role === 'Admin'"
           :to="'/CRM/' + $route.params.id + '/user'"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
            <h2 class="text-xl font-semibold text-blue-500 mb-2">Espace Utilisateur</h2>
            <p class="text-gray-600">Administrez les comptes utilisateurs</p>
        </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { User } from '~/models/user/user';
    import {users} from '../../../utils/users'

    const route = useRoute(); 
    let currentUser : User | undefined

    onMounted(() => {
        const userId = route.params.id;
        currentUser = users.value.find(u => u.id === userId);
    });
</script>