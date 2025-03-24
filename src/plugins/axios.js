import axios from "axios"
import { useMessage } from "naive-ui"

export default {
    instal: (app, options) => {
        const message = useMessage()
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
        })

        app.config.globalProperties.$axios.interceptors.response.use((res) => {
            console.log(res)
            return res
        }, async (err) => {
            message.error('Ошибка - ')
            console.log(err)
        })
    }
}