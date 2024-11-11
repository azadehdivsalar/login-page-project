<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated v-if="!isLoginPage && !isSighnUpPage"> -->

      <!-- <q-header elevated>
      <q-toolbar >
        <q-toolbar-title>
          <q-icon name="person" />
          Welcome {{ username }}!
        </q-toolbar-title>
        <q-btn flat icon="logout" @click="logout" label="Logout" />
      </q-toolbar>
    </q-header> -->
      <!-- <q-header elevated>
      <q-toolbar >
        <q-toolbar-title>
          <q-icon name="person" />
          Welcome {{ username }}!
        </q-toolbar-title>
        <q-btn flat icon="logout" @click="logout" label="Logout" />
      </q-toolbar>
    </q-header> -->
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->
 <!-- <q-toolbar v-if="$route.name === 'user-info'" class="header" style="justify-content: space-between;">
      <div>
        <q-icon name="account_circle" />
        <span>{{ firstname || 'User' }} {{ lastname }}</span>
      </div>
      <q-btn @click="logout" label="Logout" color="primary" />
    </q-toolbar> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { useAuthStore } from 'src/stores/auth'
// import { LocalStorage } from 'quasar'
// import vue from 'eslint-plugin-vue'
// const router = useRouter()

// const authStore = useAuthStore()
// const userData = LocalStorage.getItem('userData')
// const username = ref(userData ? userData.username : '')
// const logout = () => {
//   LocalStorage.remove('userData')
//   authStore.logout()
//   router.push('/')
// }
</script>
<!-- <style scoped>
.q-header {
  background-color: #6200ea;
  color: white;
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
} -->
<!-- </style> -->
