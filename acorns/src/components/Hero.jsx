import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-green-700 dark:from-gray-800 dark:to-gray-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Invierte el cambio de tus compras
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
        >
          Acorns redondea tus compras al dólar más cercano e invierte la diferencia automáticamente.
          Empieza con solo $5.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#" className="btn-primary bg-white text-primary hover:bg-gray-100 dark:bg-gray-200 dark:text-gray-900">
            Comienza gratis
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-sm opacity-80"
        >
          Sin comisiones ocultas · Ahorro automático · Inversión diversificada
        </motion.p>
      </div>
      {/* Decoración de fondo */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero