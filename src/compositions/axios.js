import { getCurrentInstance } from "vue"

export const useAxios = () => {
    const instance = getCurrentInstance()
    return instance.appContext.app.config.globalProperties.$axios
}