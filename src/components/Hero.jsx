import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Rocket, Shield, Leaf } from 'lucide-react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // noop for now; framer handles animations
  }, [])

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9kNn40e0yZWj2hQL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-white/40 to-white/90 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 shadow-sm">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">AI-powered pest protection</span>
          </div>
          <h1 ref={titleRef} className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-emerald-900 md:text-6xl">
            PestHub — Instantly identify pests. Protect crops. Maximize yield.
          </h1>
          <p className="mt-6 text-lg text-emerald-800/80 md:text-xl">
            Upload a photo or search by name to get expert-grade identification, treatments, and prevention in under 3 seconds.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#classify" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-6 py-3 text-white shadow-lg transition-transform hover:scale-[1.02]">
              <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              Get Started
            </a>
            <a href="#directory" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-emerald-700 shadow ring-1 ring-emerald-200 backdrop-blur">
              <Leaf className="h-5 w-5" />
              Explore pests
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
