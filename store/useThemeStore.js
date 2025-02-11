import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(
    persist(
        (set) => ({
            isDarkMode: true,
            toggleTheme: () => set((state) => {
                const newDarkMode = !state.isDarkMode
                if (typeof window !== 'undefined') {
                    if (newDarkMode) {
                        document.body.classList.add('dark-theme')
                        document.body.style.backgroundColor = 'transparent'
                    } else {
                        document.body.classList.remove('dark-theme')
                        document.body.style.backgroundColor = 'white'
                    }
                }
                return { isDarkMode: newDarkMode }
            }),
        }),
        {
            name: 'theme-storage',
        }
    )
)

export default useThemeStore 