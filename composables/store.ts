import { reactive } from 'vue'

export const store = reactive({
    activeTabIndex: 0,
    isDark: false,
    colorScheme: 'light',
    changeActiveTab(newIndex: number) {
        this.activeTabIndex = newIndex
    },
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
