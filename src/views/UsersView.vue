<template>
  <div class="users-view">
    <NConfigProvider :theme-overrides="theme">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <NCard>
              <NSpace>
                <NButton @click="theme = themeRed">
                  Тёмная тема
                </NButton>
                <NButton @click="theme = null">
                  Светлая тема
                </NButton>
              </NSpace>
            </NCard>
          </div>
          <div class="col-12">
            <NButton type="primary" @click="onAddUserClick">Добавить пользователя</NButton>
            <NButton type="primary" @click="onDashBoardClick">Доска с инфой</NButton>
            <NList>
              <NListItem v-for="user in usersStore.users" :key="user.id">
                <NThing :title="user.name" :title-extra="user.age">


                </NThing>
              </NListItem>
            </NList>
          </div>
        </div>
      </div>
    </NConfigProvider>
  </div>
</template>


<script setup>
//import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { NButton, NList, NSpace, NCard, NListItem, NThing, NConfigProvider } from 'naive-ui'
import { useUsersStore } from '../stores/users'
import { useThemeStore } from '../stores/theme'


const router = useRouter()
const usersStore = useUsersStore()
const themeStore = useThemeStore()

const { theme, themeRed } = storeToRefs(themeStore)

console.log(JSON.parse(JSON.stringify(theme)));
console.log(JSON.parse(JSON.stringify(themeRed)));

const onAddUserClick = () => {
  router.push('/create-user')
}

const onDashBoardClick = () => {
  router.push('/dash-board')
}

</script>