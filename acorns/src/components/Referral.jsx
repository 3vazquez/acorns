import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Share2, PiggyBank, Gift, Copy, QrCode, Check } from 'lucide-react'
import { REFERRAL_CONFIG } from '../config/referral'

const STEPS = [
  {
    icon: Share2,
    title: 'Invita a tus amigos',
    highlight: 'Tu enlace único',
    description:
      'Comparte tu enlace de referido. Tus amigos deben usarlo para completar el registro. Necesitas su consentimiento para contactarlos con esta oferta — puedes editar los mensajes predefinidos según lo desees.',
  },
  {
    icon: PiggyBank,
    title: 'Tus amigos invierten',
    highlight: `Depósito de ${REFERRAL_CONFIG.minDeposit}+`,
    description:
      'Deben completar con éxito su primer depósito dentro de los 14 días posteriores a la finalización de la oferta. Los depósitos pueden tardar hasta 5 días hábiles en procesarse.',
  },
  {
    icon: Gift,
    title: 'Reciban su recompensa',
    highlight: 'Bono en 30 días',
    description:
      'El bono se invertirá una vez confirmada la elegibilidad. Ambas cuentas deben mantenerse abiertas y en regla hasta el día en que se invierta el bono.',
  },
]

const Referral = () => {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CONFIG.link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🎁 Programa de Referidos
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Invita a tus amigos y <span className="text-primary">gana dinero</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2 max-w-2xl mx-auto">
            Comparte tu enlace único y recibe <strong>{REFERRAL_CONFIG.bonusAmount}</strong> por cada amigo que se registre e invierta.
            ¡Ellos también obtienen un bono de bienvenida!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Durante promociones limitadas, ¡tus bonos pueden superar los $1,000!
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={REFERRAL_CONFIG.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-primary hover:bg-[#00995c] text-white text-lg px-10 py-4"
          >
            Obtén tu enlace de referido
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-colors"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? '¡Copiado!' : 'Copiar enlace'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQR((prev) => !prev)}
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-colors"
          >
            <QrCode size={18} />
            {showQR ? 'Ocultar QR' : 'Ver código QR'}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-center mb-16"
            >
              <div className="bg-white p-4 rounded-2xl shadow-lg inline-block text-center">
                <QRCodeSVG value={REFERRAL_CONFIG.link} size={200} level="H" includeMargin />
                <p className="text-gray-600 text-sm mt-2">Escanea para acceder al enlace</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Línea de tiempo del proceso */}
        <div className="relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/20" style={{ marginInline: '10%' }} />

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center md:text-left"
                >
                  {/* Icono + número */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0 mb-4">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                      <Icon size={28} />
                    </div>
                    <span className="md:mt-3 text-xs font-bold uppercase tracking-wide text-primary">
                      Paso {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {step.title}
                  </h3>

                  <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                    {step.highlight}
                  </span>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
          * Aplican términos y condiciones. Verifica la disponibilidad en tu país.
        </p>
      </div>
    </section>
  )
}

export default Referral