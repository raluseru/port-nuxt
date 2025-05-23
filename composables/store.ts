import { reactive } from 'vue'

export const store = reactive({
    isDark: false,
    colorScheme: 'light',
    changeTheme(newValue: string) {
        if (typeof document === 'undefined') return
        const root = document.documentElement // better than body
        if (newValue === 'dark') {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
        root.style.colorScheme = newValue
        this.isDark = newValue === 'dark'
        this.colorScheme = newValue
        localStorage.setItem('theme', newValue)
    },
    initTheme() {
        if (typeof document === 'undefined') return
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const theme = saved || (prefersDark ? 'dark' : 'light')
        this.changeTheme(theme)
    }
})