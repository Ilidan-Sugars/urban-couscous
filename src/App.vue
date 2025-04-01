<template>

    <n-message-provider>
        <RouterView></RouterView>
    </n-message-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'

import { useMessage } from 'naive-ui'
window.$message = useMessage()
</script>