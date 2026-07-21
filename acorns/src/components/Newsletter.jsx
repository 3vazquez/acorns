import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { REFERRAL_CONFIG } from '../config/referral'

// Variables de entorno (Vite) - deben ir en .env y NUNCA subirse al repo
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()

    const trimmedEmail = email.trim()

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus('error')
      setErrorMsg('Ingresa un correo electrónico válido.')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Faltan variables de entorno de EmailJS')
      setStatus('error')
      setErrorMsg('Servicio no disponible temporalmente.')
      return
    }

    setStatus('loading')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { user_email: trimmedEmail },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setEmail('')
    } catch (err) {
      console.error('Error al enviar suscripción:', err)
      setStatus('error')
      setErrorMsg('Error al enviar. Intenta de nuevo más tarde.')
    }
  }, [email])

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Suscríbete para más consejos
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Recibe noticias y estrategias de inversión directamente en tu correo.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              disabled={status === 'loading'}
              autoComplete="email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary bg-primary hover:bg-[#00995c] text-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
            </button>
          </form>

          <div aria-live="polite" className="min-h-[1.5rem] mt-4">
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 dark:text-green-400"
                >
                  ✅ ¡Gracias! Revisa tu correo para confirmar.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-600 dark:text-red-400"
                >
                  ❌ {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter