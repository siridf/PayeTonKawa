<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 class="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              v-model="currentUser.email"
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
              v-model="currentUser.password"
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se connecter
          </button>
          <div class="text-center">
            <NuxtLink to="/register" class="text-sm text-blue-500 hover:text-blue-600">
              Pas de compte ? Inscrivez-vous !
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { users } from '../utils/users'
    import { User, ERoles } from '../models/user/user'
    import { useRouter } from 'vue-router'

    const currentUser = ref(new User('', '', '', '', '', ERoles.client))
    const router = useRouter()

    const login = () => {
      const foundUser = users.value.find(user => user.email === currentUser.value.email)

      if (foundUser && foundUser.password === currentUser.value.password) {
        if (foundUser.role === ERoles.client) {
          router.push(`/WebShop/${foundUser.id}/MainPage`)
        } else if (foundUser.role === ERoles.admin || foundUser.role === ERoles.seller) {
          router.push(`/CRM/${foundUser.id}/CrmPage`)
        }
      } else {
        console.log('Identifiants incorrects')
      }
    }
</script>