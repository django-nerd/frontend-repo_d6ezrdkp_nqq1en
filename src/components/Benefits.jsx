import { motion } from 'framer-motion'
import { Bot, Zap, ShieldCheck, Leaf, Sparkles, Gauge } from 'lucide-react'

const items = [
  { icon: Bot, title: 'Gemini AI Detection', desc: 'Cutting-edge vision + language models for instant recognition.' },
  { icon: ShieldCheck, title: 'Crop Protection', desc: 'Actionable guidance to minimize damage and protect yield.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Balanced, eco-friendly recommendations tailored to your crop.' },
  { icon: Zap, title: 'Under 3s', desc: 'Blazing-fast results with a 95% accuracy target.' },
  { icon: Sparkles, title: 'Expertise', desc: 'Curated knowledge base and verified sources.' },
  { icon: Gauge, title: 'Ease of Use', desc: 'Drag-and-drop, mobile ready, delightful interactions.' },
]

export default function Benefits() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-emerald-900 md:text-4xl"
        >
          Why farmers choose PestHub
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-emerald-900">{it.title}</h3>
              </div>
              <p className="mt-3 text-emerald-800/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
