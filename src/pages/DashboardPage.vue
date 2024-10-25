<template>
  <q-page class="q-pa-md">
    <div>
      <h1>Welcome, {{ authStore.username }}!</h1>
      <q-btn label="Logout" color="negative" @click="logout" />
    </div>
  </q-page>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>
