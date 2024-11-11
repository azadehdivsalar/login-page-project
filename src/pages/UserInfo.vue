<template>
  <q-page class="q-pa-md">
    <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-header elevated>
      <q-toolbar >
        <q-toolbar-title>
          <q-icon name="person" />
          Welcome {{ authStore.userData.username }}!
        </q-toolbar-title>
        <q-btn flat icon="logout" @click="logout" label="Logout" />
      </q-toolbar>
    </q-header>
  <!-- </q-layout> -->
  <q-drawer show-if-above v-model="drawer" side="left" elevated>
        <q-list>
          <q-item-label header>Users</q-item-label>
          <q-item v-for="user in users" :key="user.id" clickable>
            <q-item-section>{{ authStore.userData.username }}</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    <q-card>
      <q-card-section>
        <q-input
          filled
          v-model="form.firstname"
          label="Firstname"
        />
        <q-input
          filled
          v-model="form.lastname"
          label="Lastname"
        />
        <q-input
          filled
          v-model="form.username"
          label="Username"
        />
        <q-input
          filled
          v-model="form.phonenumber"
          label="Phone Number"
        />
        <q-input
          filled
          v-model="form.email"
          label="Email"
        />
        <q-btn @click="saveChanges" label="Save Changes" color="primary" />
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
// import { LocalStorage } from 'quasar'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const drawer = ref(false)
const users = computed(() => authStore.getUsers)

const form = ref({
  firstname: '',
  lastname: '',
  username: '',
  phonenumber: '+98',
  email: '',
  errorMessage: '',
  successMessage: ''
})

onMounted(() => {
  const userData = authStore.userData
  if (userData) {
    form.value = { ...form.value, ...userData }
    console.log('User data loaded from store:', userData)
  } else {
    alert('User data not found. Redirecting to login page.')
    router.push('/')
  }
})

// onMounted(() => {
//   const userData = LocalStorage.getItem('userData')
//   if (userData) {
//     form.value = { ...form.value, ...userData }
//     console.log('User data loaded:', userData)
//   } else {
//     alert('User data not found. Redirecting to login page.')
//     router.push('/')
//   }
// })
//     LocalStorage.set('userData', updatedUserData)
//     console.log('DEBUGGED!')
//     alert('Changes saved!')
//     router.push('/dashboard')
//   } else {
//     alert('Please fill in all required fields with valid data.')
//   }
// }

const saveChanges = () => {
  if (form.value.firstname && form.value.lastname && form.value.username && form.value.phonenumber && form.value.email) {
    const updatedUserData = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      username: form.value.username,
      phonenumber: form.value.phonenumber,
      email: form.value.email
    }
    authStore.updateUserData(updatedUserData) // Call store action to update user data
    console.log('DEBUGGED!')
    alert('Changes saved!')
    router.push('/dashboard')
  } else {
    alert('Please fill in all required fields with valid data.')
  }
}

// const userData = LocalStorage.getItem('userData')
// const username = ref(userData ? userData.username : '')
// console.log('DEBUGGED!')

const logout = () => {
  authStore.logout()
  router.push('/')
}

// const logout = () => {
//   LocalStorage.remove('userData')
//   authStore.logout()
//   router.push('/')
// }
</script>

<style scoped>
.q-card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.q-card-section h2 {
  margin-bottom: 20px;
}
</style>
