import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref(null)

    const themeRed = ref({
        "common": {
            "fontWeight": "900",
            "fontSize": "16",
            "baseColor": "#A00101FF",
            "successColorSuppl": "rgba(161, 15, 42, 1)",
            "fontWeightStrong": "900",
            "primaryColor": "#733A3BFF",
            "primaryColorHover": "#E77F81FF",
            "primaryColorPressed": "#CE5A5CFF",
            "primaryColorSuppl": "rgba(148, 42, 44, 1)",
            "infoColor": "#B4E870FF",
            "infoColorHover": "#DAEC8AFF",
            "infoColorPressed": "#C6D366FF",
            "infoColorSuppl": "rgba(181, 197, 56, 1)",
            "successColor": "#E2636EFF",
            "successColorHover": "#E77F81FF",
            "successColorPressed": "#CE5A5CFF",
            "warningColor": "#7DF2F2FF",
            "warningColorHover": "#99EDF5FF",
            "warningColorPressed": "#60E698FF",
            "errorColor": "#87E880FF",
            "errorColorHover": "#8BE991FF",
            "errorColorPressed": "#72E57FFF",
            "errorColorSuppl": "rgba(58, 208, 88, 1)",
            "textColorBase": "#BC0000FF",
            "textColor1": "rgba(151, 187, 155, 0.9)",
            "textColor2": "rgba(215, 181, 181, 1)",
            "tableColor": "rgba(4, 4, 159, 1)",
            "cardColor": "rgba(61, 28, 29, 1)",
            "invertedColor": "#450000FF",
            "bodyColor": "rgba(16, 20, 18, 1)"
        }
    })

    return { theme, themeRed }
})