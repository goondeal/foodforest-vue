import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})

    const setUser = (user) => {
      user.value = user
      localStorage.setItem('user', user.value)
    }

    const initStore = () => {
      const user = localStorage.getItem('user')
      if (user) {
        setUser(user)
      }
    }

    return { user, setUser, initStore }
  }
)
