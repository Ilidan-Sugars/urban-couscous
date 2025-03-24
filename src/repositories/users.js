import { useAxios } from "~/compositions/axios"

export default {
    all: () => {
        const axios = useAxios()
        return axios.get('/users')
    },

    get: (id) => {
        const axios = useAxios()
        return axios.get('/users', { params: { id: id } })
    }

}