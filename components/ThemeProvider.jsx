'use client'

import { useEffect } from 'react'
import useThemeStore from '@/store/useThemeStore'

export default function ThemeProvider({ children }) {
  const { isDarkMode } = useThemeStore()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
      document.body.style.backgroundColor = 'transparent'
    } else {
      document.body.classList.remove('dark-theme')
      document.body.style.backgroundColor = 'white'
    }
  }, [isDarkMode])

  return children
} 