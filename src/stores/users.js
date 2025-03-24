import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { id: 1, name: 'oleg', age: '27' }
  ])

  function getId() {
    return users.value.at(-1)?.id ?? 0
    
  }

  function add(user) {
    user['id'] = getId() + 1
    users.value.push(user)
  }


  return { users, add }
})
