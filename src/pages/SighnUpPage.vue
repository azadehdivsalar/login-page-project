<!-- <template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md q-pa-md flex flex-center">
      <q-card style="max-width: 400px; width: 100%">
        <q-card-section>
          <q-form @submit="onSubmit" >
            <q-input
                  filled
                  v-model="firstname"
                  label=" Firstname"
                  :rules="[val => !!val || 'Username is required']"
                  >
                  <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
                <q-input
                  filled
                  v-model="lastname"
                  label=" Lastname"
                  :rules="[val => !!val || 'Field is required']"
                  >
                  <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
                <q-input
                  filled
                  v-model="username"
                  label=" Username"
                  :rules="[val => !!val || 'Field is required']"
                  >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
                <q-input
                  filled
                  v-model="phonenumber"
                  label=" Phone Number"
                  :rules="[val => !!val || 'Field is required',
                    val => /^\+98\d{10}$/.test(val) || 'Phone number must start with +98 and be followed by exactly 10 digits'
                  ]"
                  maxlength="13"
                  @input="limitPhoneNumber"
                  >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
                  <q-input
                    filled
                    clearable
                    v-model="email"
                    type="email"
                    label="Email"
                    :rules="[val=> !!val || 'Failed is required',
                    val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Invalid email format'
                  ]
                  ">
                    <template v-slot:prepend>
                     <q-icon name="email" />
                    </template>
                  </q-input>
              <q-input
               filled
               clearable
                v-model="password"
                 type="password"
                 label="Password"
                outlined
                 :rules="[val=> !!val || 'Failed is required',
                          val => val.length >= 6 || 'Password must be at least 6 characters'
                 ]" >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
                 <q-input
                        filled
                        square
                        v-model="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        outlined
                        :rules="[
                          val => !!val || 'Field is required',
                          val => val === password || 'Passwords must match'
                        ]">
                        <template v-slot:prepend>
                           <q-icon name="lock" />
                        </template>
                 </q-input>

            <div>
              <q-btn label="Sign Up" color="secondary" @click="router.push('/signup')"/>
              <q-btn label="Go to Login" color="secondary" @click="goToLogin"/>
              <q-banner v-if="errorMessage" type="negative">{{ errorMessage }}</q-banner>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const firstname = ref('')
const lastname = ref('')
const username = ref('')
const phonenumber = ref('+98')
const email = ref('')
const password = ref('')
const confirmpassword = ref('')
const authStore = useAuthStore()
const router = useRouter()
const errorMessage = ref('')

const limitPhoneNumber = () => {
  if (phonenumber.value.startsWith('+98') && phonenumber.value.length > 13) {
    phonenumber.value = phonenumber.value.slice(0, 13)
  }
}

watch(phonenumber, (newVal) => {
  if (!newVal.startsWith('+98')) {
    phonenumber.value = '+98' + newVal.replace(/^\+98/, '')
  }
})

const onSubmit = async () => {
  try {
    if (!confirmpassword.value) {
      throw new Error('Confirm Password is required')
    }
    if (password.value !== confirmpassword.value) {
      throw new Error('Passwords must match')
    }
    const userData = {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      phonenumber: phonenumber.value,
      email: email.value,
      password: password.value,
      confirmpassword: confirmpassword.value
    }

    await authStore.signUp(userData)
    console.log('Sign up successful')

    if (authStore.isAuthenticated) {
      router.push('/user-info')
    }
  } catch (error) {
    console.error('Error:', error.message)
    errorMessage.value = error.message
  }
}

const goToLogin = () => {
  router.push('/')
}
</script>
<style scoped>
.q-page {
  background-color: #f5f5f5;
}

.custom-card {
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.q-input {
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.error-banner {
  margin-top: 10px;
  color: red;
}
</style> -->

<!-- <template>
  <q-page class="q-pa-md custom-page">
    <div class="form-container">
      <q-card class="custom-card">
        <q-card-section>
          <q-form @submit="onSubmit">
            <q-input
              filled
              v-model="firstname"
              label="Firstname"
              :rules="[val => !!val || 'Firstname is required']"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="lastname"
              label="Lastname"
              :rules="[val => !!val || 'Lastname is required']"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="username"
              label="Username"
              :rules="[val => !!val || 'Username is required']"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="phonenumber"
              label="Phone Number"
              :rules="[
                val => !!val || 'Phone number is required',
                val => /^\+98\d{10}$/.test(val) || 'Phone number must start with +98 and be followed by exactly 10 digits'
              ]"
              maxlength="13"
              @input="limitPhoneNumber"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>

            <q-input
              filled
              clearable
              v-model="email"
              type="email"
              label="Email"
              :rules="[
                val => !!val || 'Email is required',
                val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Invalid email format'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              filled
              clearable
              v-model="password"
              type="password"
              label="Password"
              :rules="[
                val => !!val || 'Password is required',
                val => val.length >= 6 || 'Password must be at least 6 characters'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="confirmpassword"
              type="password"
              label="Confirm Password"
              :rules="[
                val => !!val || 'Confirm Password is required',
                val => val === password || 'Passwords must match'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <div class="button-group">
              <q-btn label="Sign Up" type="submit" color="primary" />
              <q-btn label="Go to Login" color="secondary" @click="goToLogin"/>
            </div>

            <q-banner v-if="errorMessage" type="negative" class="error-banner">{{ errorMessage }}</q-banner>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const form = ref({
  firstname: '',
  lastname: '',
  username: '',
  phonenumber: '+98',
  email: '',
  password: '',
  errorMessage: '',
  successMessage: ref('')

})
const authStore = useAuthStore()
const router = useRouter()
const limitPhoneNumber = () => {
  if (form.value.phonenumber.startsWith('+98') && form.value.phonenumber.length > 13) {
    form.value.phonenumber = form.value.phonenumber.slice(0, 13)
  }
}

watch(form.value.phonenumber, (newVal) => {
  if (!newVal.startsWith('+98')) {
    form.value.phonenumber = '+98' + newVal.replace(/^\+98/, '')
  }
})

const onSubmit = async () => {
  form.value.errorMessage = ''
  form.value.successMessage = ''

  try { -->
    <!-- // if (!confirmpassword.value) {
    //   throw new Error('Confirm Password is required')
    // }
    // if (password.value !== confirmpassword.value) {
    //   throw new Error('Passwords must match')
    // }
    const userData = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      username: form.value.username,
      phonenumber: form.value.phonenumber,
      email: form.value.email,
      password: form.value.password
    }

    await authStore.signUp(userData)
    console.log('Sign up successful')
    form.value.successMessage = 'Sign up successful'
    // Store the user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [] // Retrieve existing users or initialize as an empty array
    users.push(userData) // Add the new user
    localStorage.setItem('userData', JSON.stringify(users)) // Save updated list back to localStorage

    if (authStore.isAuthenticated) {
      router.push('/user-info')
    }
  } catch (error) {
    console.error('Error:', error.message)
    form.value.errorMessage = error.message
  }
}
const goToLogin = () => {
  router.push('/')
}
</script>

<style scoped>
.custom-page {
  background-color: #f5f5f5;
}

.form-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.custom-card {
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.q-input {
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.error-banner {
  margin-top: 10px;
  color: red;
}
</style> -->

<template>
  <q-page class="q-pa-md custom-page">
    <div class="form-container">
      <q-card class="custom-card">
        <q-card-section>
          <q-form @submit="onSubmit">
            <q-input
              filled
              v-model="form.firstname"
              label="Firstname"
              :rules="[val => !!val || 'Firstname is required']"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="form.lastname"
              label="Lastname"
              :rules="[val => !!val || 'Lastname is required']"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="form.username"
              label="Username"
              :rules="[val => !!val || 'Username is required']"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="form.phonenumber"
              label="Phone Number"
              :rules="[
                val => !!val || 'Phone number is required',
                val => /^\+98\d{10}$/.test(val) || 'Phone number must start with +98 and be followed by exactly 10 digits'
              ]"
              maxlength="13"
              @input="limitPhoneNumber"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>

            <q-input
              filled
              clearable
              v-model="form.email"
              type="email"
              label="Email"
              :rules="[
                val => !!val || 'Email is required',
                val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Invalid email format'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              filled
              clearable
              v-model="form.password"
              type="password"
              label="Password"
              :rules="[
                val => !!val || 'Password is required',
                val => val.length >= 6 || 'Password must be at least 6 characters'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="form.confirmpassword"
              type="password"
              label="Confirm Password"
              :rules="[
                val => !!val || 'Confirm Password is required',
                val => val === form.password || 'Passwords must match'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <div class="button-group">
              <q-btn label="Sign Up" type="submit" color="primary" />
              <q-btn label="Go to Login" color="secondary" @click="goToLogin"/>
            </div>

            <q-banner v-if="form.successMessage" type="positive" class="success-banner">{{ form.successMessage }}</q-banner>
            <q-banner v-if="form.errorMessage" type="negative" class="error-banner">{{ form.errorMessage }}</q-banner>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { LocalStorage } from 'quasar'
import { ref, watch } from 'vue'
// import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'
// import { errorMessages } from 'vue/compiler-sfc'

const form = ref({
  firstname: '',
  lastname: '',
  username: '',
  phonenumber: '+98',
  email: '',
  password: '',
  confirmpassword: '',
  errorMessage: '',
  successMessage: ''
})

// const authStore = useAuthStore()
const router = useRouter()

const limitPhoneNumber = () => {
  if (form.value.phonenumber.startsWith('+98') && form.value.phonenumber.length > 13) {
    form.value.phonenumber = form.value.phonenumber.slice(0, 13)
  }
}

watch(() => form.value.phonenumber, (newVal) => {
  if (!newVal.startsWith('+98')) {
    form.value.phonenumber = '+98' + newVal.replace(/^\+98/, '')
  }
})

const onSubmit = async () => {
  form.value.errorMessage = ''
  form.value.successMessage = ''

  try {
    if (form.value.password !== form.value.confirmpassword) {
      throw new Error('Passwords must match')
    }

    const userData = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      username: form.value.username,
      phonenumber: form.value.phonenumber,
      email: form.value.email,
      password: form.value.password
      // errorMessages: form.value.errorMessage
    }

    const users = LocalStorage.getItem('users') || []
    console.log(users)
    users.push(userData)
    LocalStorage.setItem('users', users)

    form.value.successMessage = 'Sign up successful!'
  } catch (error) {
    console.error('Error:', error.message)
    form.value.errorMessage = error.message
  }
}

const goToLogin = () => {
  router.push('/')
}
</script>

<style scoped>
.custom-page {
  background-color: #f5f5f5;
}

.form-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.custom-card {
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.q-input {
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.success-banner {
  margin-top: 10px;
  color: green;
}

.error-banner {
  margin-top: 10px;
  color: red;
}
</style>
