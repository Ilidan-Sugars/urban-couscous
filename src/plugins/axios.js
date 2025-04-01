import axios from 'axios'
import { useMessage } from 'naive-ui'

export default {
    install: (app, options) => {
        const messgae = useMessage()
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
        })

        app.config.globalProperties.$axios.interceptors.response.use((res) => {
            console.log(res)
            return res;
        }, async (err) => {
            messgae.error('Ошибка!')
            console.log(err)
        })
    }
}