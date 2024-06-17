<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h1 class="text-2xl font-bold mb-6 text-center">Inscription</h1>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label for="firstName" class="block text-gray-700 font-bold mb-2">Prénom</label>
          <input
            v-model="newClient.firstName"
            type="text"
            id="firstName"
            placeholder="Entrez votre prénom"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="lastName" class="block text-gray-700 font-bold mb-2">Nom</label>
          <input
            v-model="newClient.lastName"
            type="text"
            id="lastName"
            placeholder="Entrez votre nom"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input
            v-model="newClient.email"
            type="email"
            id="email"
            placeholder="Entrez votre email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-bold mb-2">Mot de passe</label>
          <input
            v-model="newClient.password"
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="role" class="block text-gray-700 font-bold mb-2">Rôle</label>
          <select
            v-model="newClient.role"
            id="role"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option :value="ERoles.client">Client</option>
            <option :value="ERoles.seller">Vendeur</option>
            <option :value="ERoles.admin">Admin</option>
          </select>
        </div>
        <div v-if="newClient.role == ERoles.admin">
          <label for="keyAdmin" class="block text-gray-700 font-bold mb-2">Clé admin</label>
          <input
            v-model="checkKeyAdmin"
            type="text"
            id="keyAdmin"
            placeholder="Entrez la clé admin"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          S'inscrire
        </button>
        <div class="text-center">
          <NuxtLink to="/login" class="text-sm text-blue-500 hover:text-blue-600">
            Déjà inscrit ? Connectez-vous !
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { User, ERoles } from '../models/user/user';
import { KEY_ADMIN } from '../utils/constants'

const newClient = ref(new User('', '', '', '', '', ERoles.client))
const checkKeyAdmin = ref('')

const register = () => {
  if (newClient.value.role === ERoles.admin) {
    if(checkKeyAdmin.value == KEY_ADMIN) {
        console.log('ça marche')
    }
  }
  console.log('Nouvel utilisateur :', newClient.value)
}
</script>