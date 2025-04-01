<template>
    <div class="dash-board">
        <NConfigProvider :theme-overrides="theme">
            <div class="container">
                <NButton class="m-2" type="primary" @click="onBackClick">Назад</NButton>
                <div class="row">

                    <div class="col-6 ">
                        <div class="row">
                            <div class="col-12 p-2">

                                <NCard title="Количество постов">
                                    <NSkeleton v-if="loading" round size="medium" :width="100"></NSkeleton>
                                    <span v-else round>{{ posts.length }}</span>
                                </NCard>
                            </div>
                            <div class="col-12 p-2">
                                <NCard title="Самое длинное имя">

                                    <NSkeleton v-if="loading" round size="medium" :width="100"></NSkeleton>
                                    <span v-else round>{{ longestName }}</span>
                                </NCard>
                            </div>
                        </div>
                    </div>
                    <NSpace class="col-6 p-2" vertical>
                        <NTable>
                            <thead>
                                <tr>
                                    <th>Users</th>
                                    <th>Num posts</th>
                                </tr>
                            </thead>
                            <tbody v-if="loading">
                                <tr>
                                    <td>
                                        <n-skeleton round text :repeat="9" size="medium" />
                                    </td>
                                    <td>
                                        <n-skeleton round text :repeat="9" size="medium" />
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else round v-for="user in users" :key="user.id">
                                <tr>
                                    <td>{{ user.name }}</td>
                                    <td>{{
                                        posts.filter((post) =>
                                            post.userId === user.id
                                        ).length
                                    }}</td>
                                </tr>
                            </tbody>
                        </NTable>
                    </NSpace>
                </div>
            </div>
        </NConfigProvider>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NCard, NSpace, NTable, NConfigProvider, NSkeleton } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'

import postsRepository from '~/repositories/posts.js'
import usersRepository from '~/repositories/users.js'


const router = useRouter()
const posts = ref([])
const users = ref([])
const longestName = ref('')
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const loading = ref(true)




onMounted(async () => {
    try {
        const { data } = await postsRepository.all()
        posts.value = data
    }
    catch (error) {
        console.log(error)
    }
})

onMounted(async () => {
    try {
        const { data } = await usersRepository.all()
        users.value = data

        for (const user of users.value) {
            if (user.name.length > longestName.value.length) {
                longestName.value = user.name
                console.log(longestName.value);
            }
        }
        loading.value = false
        window.$message.success(
            'Cause you walked hand in hand With another man in my place'
        )
    }
    catch (error) {
        console.log(error)
    }
})

const onBackClick = () => {
    router.push('/')
}


console.log(longestName);
console.log(users)


</script>