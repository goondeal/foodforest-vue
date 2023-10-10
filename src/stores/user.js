import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})
    const accessToken = ref('')

    const setUser = (user) => {
      user.value = user
      localStorage.setItem('user', user.value)
    }
    const setAccessToken = (token) => {
      accessToken.value = token
      localStorage.setItem('accessToken', accessToken.value)
    }

    const initStore = () => {
      const usr = localStorage.getItem('user')
      const accessTkn = localStorage.getItem('accessToken')
      if (accessTkn) {
        accessToken.value = accessTkn
        user.value = usr
      }
    }

    return { user, setUser, setAccessToken, initStore }
  }
)
