<template>
  <div class="create-user-view">
    <NConfigProvider :theme-overrides="theme">
      <NForm ref="formRef" inline :label-width="80">
        <NFormItem label="Name" path="user.name">
          <NInput v-model:value="user.name" placeholder="Input Name" />
        </NFormItem>
        <NFormItem label="Age" path="user.age">
          <NInput v-model:value="user.age" placeholder="Input Age" />
        </NFormItem>
        <NFormItem>
          <NButton @click="handleValidateClick">
            Validate
          </NButton>
        </NFormItem>
      </NForm>
    </NConfigProvider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, NConfigProvider } from 'naive-ui'
import { useUsersStore } from '../stores/users'
import { useThemeStore } from '../stores/theme'

const usersStore = useUsersStore()
const themeStore = useThemeStore()
const router = useRouter()

const { theme } = storeToRefs(themeStore)

const user = ref({
  name: '',
  age: ''
})

const handleValidateClick = () => {
  usersStore.add(user.value)
  router.push('/')
}

</script>
