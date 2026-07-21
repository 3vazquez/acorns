import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    { icon: '🔄', title: 'Redondeo automático', desc: 'Cada compra se redondea al dólar y la diferencia se invierte.' },
    { icon: '📊', title: 'Portafolio diversificado', desc: 'Elige entre 5 carteras de ETF según tu perfil de riesgo.' },
    { icon: '💰', title: 'Inversión recurrente', desc: 'Programa aportes diarios, semanales o mensuales.' },
    { icon: '📱', title: 'App móvil intuitiva', desc: 'Gestiona tus inversiones desde tu teléfono en cualquier momento.' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          ¿Cómo funciona Acorns?
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              whileHover={{ y: -5 }}
              className="card dark:bg-gray-800 dark:text-white text-center"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features