import { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,   // Czas trwania animacji (im więcej, tym "wolniej" płynie)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Funkcja łagodzenia
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll