import { useAxios } from "~/compositions/axios"

export default {
    all: () => {
        const axios = useAxios()
        return axios.get('/posts')
    },

    get: (id) => {
        const axios = useAxios()
        return axios.get('/posts', { params: { userId: id } })
    }
}