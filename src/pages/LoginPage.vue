<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-grey-2">
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-img
                    placeholder-src="~assets/Images/pic1.jpeg"
                    src="~assets/Images/pic1.jpeg"
                    spinner-color="white"
                  ></q-img>
                </div>

                <div class="col-md-6 col-xs-12">
                  <div class="q-pa-md">
                    <div class="text-h6 q-pb-md text-blue-8 text-center text-weight-bolder">
                      Back Office
                    </div>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                      <q-input
                        filled
                        v-model="form.username"
                        label="Username"
                        :rules="[val => !!val || 'Field is required']"
                      >
                        <template v-slot:prepend>
                          <q-icon name="account_circle" />
                        </template>
                      </q-input>

                      <q-input
                        filled
                        clearable
                        v-model="form.password"
                        type="password"
                        label="Password"
                        outlined
                        :rules="[
                          val => !!val || 'Field is required'
                          // val => val.length >= 6 || 'Password must be at least 6 characters'
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="lock" />
                        </template>
                      </q-input>

                      <div class="button-container">
                        <q-btn label="Login" type="submit" color="primary" class="q-mr-sm"  />
                        <q-btn
                          label="Sign Up"
                          type="button"
                          color="primary"
                          flat
                          @click="goToSignup"
                        />
                      </div>
                      <div v-if="form.errorMessage" class="text-red q-mt-md">
                        {{ form.errorMessage }}
                      </div>

                    </q-form>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { LocalStorage } from 'quasar'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const form = ref({
  username: '',
  password: '',
  errorMessage: ''
})

const authStore = useAuthStore()
const router = useRouter()
// const isLoginPage = true

const onSubmit = async () => {
  try {
    const userData = {
      username: form.value.username,
      password: form.value.password
    }

    // Retrieve users list from LocalStorage and parse it to an array
    const existingUsers = LocalStorage.getItem('users') || []
    console.log(existingUsers)

    // Find matching user in the stored users list
    const matchedUser = existingUsers.find(user =>
      user.username === userData.username && user.password === userData.password
    )

    if (!matchedUser) {
      throw new Error('User not found. Please sign up first.')
    }

    // If user is found, proceed with login
    authStore.login(matchedUser)

    // Navigate to user-info page
    router.push('/user-info')
  } catch (error) {
    console.error(error)
    form.value.errorMessage = error.message
  }
}

// const onSubmit = async () => {
//   try {
//     const userData = {
//       username: form.value.username,
//       password: form.value.password
//     }
//     console.log('hi')

//     const existingUsers = JSON.parse(LocalStorage.getItem('users')) || []

//     const matchedUser = existingUsers.find(user =>
//       user.username === userData.username && user.password === userData.password
//     )

//     if (!matchedUser) {
//       throw new Error('User not found. Please sign up first.')
//     }

//     // If user is found, proceed with login
//     authStore.login(matchedUser)
//     // LocalStorage.set('userData', userData)
//     // authStore.set('userData', userData)
//     router.push('user-info')
//   } catch (error) {
//     console.log(error)
//     form.value.errorMessage = error.message
//   }
// }
const goToSignup = () => {
  router.push('/signup')
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
  margin: 0 5px;
  width: auto;
}

.q-input {
  margin-bottom: 16px;
}

.text-red {
  color: red;
  font-size: 14px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.q-btn {
  width: 48%;
}
</style>
