import { reactive } from 'vue'

export const store = reactive({
    isDark: false,
    colorScheme: 'light',
    changeTheme(newValue: string) {
        const root = document.body
        if (newValue==='dark') {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
        root.style.colorScheme = newValue
        this.isDark = newValue === 'dark'
        this.colorScheme = newValue
    },
})
