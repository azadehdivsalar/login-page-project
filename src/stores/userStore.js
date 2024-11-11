// import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'

// export const useUserStore = defineStore('user', {
//   state: () => ({
//     isAuthenticated: false,
//     userData: null
//   }),
//   actions: {
//     login (userData) {
//       this.isAuthenticated = true
//       this.userData = userData
//     },
//     logout () {
//       this.isAuthenticated = false
//       this.userData = null
//     },
//     updateUserData (updatedData) {
//       this.userData = { ...this.userData, ...updatedData }
//       LocalStorage.set('userData', this.userData)
//     }
//   }
// })

// import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     userData: LocalStorage.getItem('userData') || {
//       firstname: '',
//       lastname: '',
//       username: '',
//       phonenumber: '',
//       email: ''
//     }
//   }),
//   getters: {
//     username: (state) => state.userData.username
//   },
//   actions: {
//     updateUserData (updatedData) {
//       this.userData = { ...this.userData, ...updatedData }
//       LocalStorage.set('userData', this.userData)
//     },
//     logout () {
//       this.userData = {}
//       LocalStorage.remove('userData')
//     }
//   }
// })
