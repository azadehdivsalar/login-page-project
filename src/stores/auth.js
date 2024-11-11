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

// import { defineStore } from 'pinia'

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
//   }),
//   actions: {
//     login () {
//       this.isAuthenticated = true
//       localStorage.setItem('isAuthenticated', 'true')
//     },
//     logout () {
//       this.isAuthenticated = false
//       localStorage.setItem('isAuthenticated', 'false')
//     }
//   },
//   getters: {
//     isLoggedIn: (state) => state.isAuthenticated
//   }
// })

// import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: LocalStorage.getItem('isAuthenticated') === true
//     // userData: LocalStorage.getItem('userData') ? JSON.parse(LocalStorage.getItem('userData')) : {},
//     // users: LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
//   }),
//   actions: {
//     login (userData) {
//       this.isAuthenticated = true
//       this.userData = userData
//       LocalStorage.set('isAuthenticated', 'true')
//       LocalStorage.set('userData', JSON.stringify(userData))
//     },
//     logout () {
//       this.isAuthenticated = false
//       this.userData = {}
// LocalStorage.remove('isAuthenticated')
// LocalStorage.remove('userData')
// },
// signUp (userData) {
//   console.log('Signing up user:', userData)
//   this.isAuthenticated = true
//   this.userData = userData
//   LocalStorage.set('isAuthenticated', 'true')
//   LocalStorage.set('userData', JSON.stringify(userData))
//   const users = LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
//   users.push(userData)
//   this.users = users
//   LocalStorage.set('users', JSON.stringify(users))
// },
// updateUserData (updatedData) {
//   this.userData = { ...this.userData, ...updatedData }
//   LocalStorage.set('userData', JSON.stringify(this.userData))

//   const users = LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
// const userIndex = users.findIndex(user => user.username === this.userData.username)
// if (userIndex !== -1) {
//   users[userIndex] = this.userData
// }
//       this.users = users
//       LocalStorage.set('users', JSON.stringify(users))
//     }
//   },
//   getters: {
//     isLoggedIn: (state) => state.isAuthenticated,
//     getUserData: (state) => state.userData,
//     getUsers: (state) => state.users
//   }
// })

// import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: LocalStorage.getItem('isAuthenticated') === 'true',
//     userData: LocalStorage.getItem('userData') ? JSON.parse(LocalStorage.getItem('userData')) : {},
//     users: LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
//   }),
//   actions: {
//     login (userData) {
//       this.isAuthenticated = true
//       this.userData = userData
//       LocalStorage.set('isAuthenticated', 'true')
//       LocalStorage.set('userData', JSON.stringify(userData)) // Convert userData to JSON
//     },
//     logout () {
//       this.isAuthenticated = false
//       this.userData = {}
//       LocalStorage.remove('isAuthenticated')
//       LocalStorage.remove('userData')
//     },
//     signUp (userData) {
//       console.log('Signing up user:', userData)
//       this.isAuthenticated = true
//       this.userData = userData
//       LocalStorage.set('isAuthenticated', 'true')
//       LocalStorage.set('userData', JSON.stringify(userData)) // Convert userData to JSON

//       // Retrieve current users, add new user, and save back to LocalStorage
//       const users = LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
//       users.push(userData)
//       this.users = users
//       LocalStorage.set('users', JSON.stringify(users)) // Convert users array to JSON
//     },
//     updateUserData (updatedData) {
//       this.userData = { ...this.userData, ...updatedData }
//       LocalStorage.set('userData', JSON.stringify(this.userData)) // Convert updated userData to JSON

//       // Update the user in the users array
//       const users = LocalStorage.getItem('users') ? JSON.parse(LocalStorage.getItem('users')) : []
//       const userIndex = users.findIndex(user => user.username === this.userData.username)
//       if (userIndex !== -1) {
//         users[userIndex] = this.userData
//       }
//       this.users = users
//       LocalStorage.set('users', JSON.stringify(users)) // Convert users array to JSON
//     }
//   },
//   getters: {
//     isLoggedIn: (state) => state.isAuthenticated,
//     getUserData: (state) => state.userData,
//     getUsers: (state) => state.users
//   }
// })

import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: LocalStorage.getItem('isAuthenticated') === 'true', // وضعیت ورود
    userData: LocalStorage.getItem('userData') ? JSON.parse(LocalStorage.getItem('userData')) : { // اطلاعات کاربر
      firstname: '',
      lastname: '',
      username: '',
      phonenumber: '',
      email: ''
    }
  }),
  getters: {
    username: (state) => state.userData.username
  },
  actions: {
    login (userData) {
      this.isAuthenticated = true
      this.userData = userData
      LocalStorage.set('isAuthenticated', 'true') // ذخیره وضعیت ورود
      LocalStorage.set('userData', JSON.stringify(userData)) // ذخیره اطلاعات کاربر در LocalStorage
    },
    logout () {
      this.isAuthenticated = false
      this.userData = {}
      LocalStorage.remove('isAuthenticated') // حذف وضعیت ورود
      LocalStorage.remove('userData') // حذف اطلاعات کاربر
    },
    updateUserData (updatedData) {
      this.userData = { ...this.userData, ...updatedData } // بروز رسانی اطلاعات کاربر
      LocalStorage.set('userData', JSON.stringify(this.userData)) // ذخیره اطلاعات به روز شده در LocalStorage
    }
  }
})
