import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    { name: 'María G.', text: 'Acorns me ayudó a ahorrar sin darme cuenta. En un año ya tengo más de $500 invertidos.', avatar: '👩' },
    { name: 'Carlos R.', text: 'La mejor manera de empezar a invertir sin complicaciones. Muy fácil de usar.', avatar: '👨' },
    { name: 'Laura P.', text: 'Me encanta la función de redondeo. Es como si el dinero se multiplicara solo.', avatar: '👩‍💼' }
  ]

  return (
    <section className="py-16 bg-primary/10 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card dark:bg-gray-700"
            >
              <div className="text-4xl mb-3">{t.avatar}</div>
              <p className="italic text-gray-700 dark:text-gray-200 mb-4">"{t.text}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials