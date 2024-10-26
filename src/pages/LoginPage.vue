<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md q-pa-md flex flex-center">
      <q-card style="max-width: 400px; width: 100%">
        <q-card-section>
          <q-form  @submit.prevent="onSubmit" ref="loginForm">
            <q-input filled v-model="username" label="Username" />
            <q-input filled v-model="password" label="Password" type="password"  outlined/>
            <div class="q-mt-md text-center">
              <q-btn label="Login" type="submit" color="primary" />
              <q-banner v-if="errorMessage" type="negative">{{ errorMessage }}</q-banner>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
// import * as Yup from 'yup'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()
const errorMessage = ref('')

// const loginSchema = Yup.object({
//   username: Yup.string().required('Username is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
// })
// const handleLogin = async () => {
//   try {
//     await loginSchema.validate({ username: username.value, password: password.value })
//     await authStore.login({ username: username.value, password: password.value })
//   } catch (error) {
//     errorMessage.value = error.message
//   }
// }

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
