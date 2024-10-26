// import { defineStore } from 'pinia'
// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: false
//   }),
//   actions: {
//     login () {
//       this.isAuthenticated = true
//     },
//     logout () {
//       this.isAuthenticated = false
//     }
//   }
// })

import { defineStore } from 'pinia'
// import axios from axios

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // tokenquasar :null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
  }),
  actions: {
    login () {
      this.isAuthenticated = true
      localStorage.setItem('isAuthenticated', 'true')
    },
    logout () {
      this.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
    }
  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated
  }
})
