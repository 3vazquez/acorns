import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="opacity-80">
          &copy; {new Date().getFullYear()} Acorns Landing · Hecho con ❤️ para inversores inteligentes.
        </p>
        <p className="text-sm opacity-60 mt-2">
          Esta es una página de demostración. Acorns es una marca registrada.
        </p>
      </div>
    </footer>
  )
}

export default Footer