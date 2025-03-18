"use client"

import React from 'react'
import { 
  BG_COLOR_DARK,
  BG_COLOR_LIGHT,
} from '../utils/constants'
import useThemeStore from '@/store/useThemeStore'

const TravelingLines = ({ children }) => {
  const { isDarkMode } = useThemeStore()

  return (
    <div className='hero-pattern' 
    style={{
      backgroundColor: isDarkMode ? BG_COLOR_DARK : BG_COLOR_LIGHT,
    }}
    >
      {children}
    </div>
  )
}

export default TravelingLines