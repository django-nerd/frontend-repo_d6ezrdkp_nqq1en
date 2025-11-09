import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Classifier from './components/Classifier'
import Directory from './components/Directory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Hero />
      <Benefits />
      <Classifier />
      <Directory />
      {/* Simple About section */}
      <section id="about" className="w-full bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">How PestHub works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">1. Capture</p>
              <p className="mt-2 text-emerald-800/80">Upload a field photo or type a pest name. We preprocess images to enhance features like venation and body shape.</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">2. Understand</p>
              <p className="mt-2 text-emerald-800/80">A multimodal AI inspects visual cues and cross-references text traits to reach a robust identification with confidence.</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">3. Act</p>
              <p className="mt-2 text-emerald-800/80">You get organic and chemical options, prevention strategies, and related pests to scout next—fast.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
