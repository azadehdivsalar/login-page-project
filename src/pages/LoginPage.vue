<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md q-pa-md flex flex-center">
      <q-card style="max-width: 400px; width: 100%">
        <q-card-section>
          <q-form @submit.prevent="onSubmit">
            <q-input filled v-model="username" label="Username" />
            <q-input filled v-model="password" label="Password" type="password" />
            <div class="q-mt-md text-center">
              <q-btn label="Login" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const onSubmit = () => {
  authStore.login(username.value, password.value)
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.q-page {
  background-color: #f5f5f5;
}

.q-card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.q-btn {
  width: 100%;
}

.q-input {
  margin-bottom: 16px;
}
</style>
