import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { dark, toggle } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
      aria-label="Cambiar tema"
    >
      {dark ? '☀️' : '🌙'}
    </motion.button>
  )
}

export default ThemeToggle