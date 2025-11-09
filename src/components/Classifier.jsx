import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Image as ImageIcon, Scan, Loader2, CheckCircle2, X } from 'lucide-react'

export default function Classifier() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [stage, setStage] = useState(1) // 1 upload, 2 preview, 3 processing, 4 result
  const [result, setResult] = useState(null)
  const inputRef = useRef(null)

  const onDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const handleFile = (f) => {
    setFile(f)
    setPreview(URL.createObjectURL(f))
    setStage(2)
  }

  const onInput = (e) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }

  const simulateClassify = async () => {
    setStage(3)
    await new Promise((r) => setTimeout(r, 1600))
    setResult({ name: 'Fall Armyworm', confidence: 0.96, threat: 'High', summary: 'Larvae feed on leaves and whorls of maize, causing windowpane damage and defoliation.' })
    setStage(4)
  }

  const reset = () => {
    setFile(null)
    setPreview('')
    setResult(null)
    setStage(1)
    inputRef.current && (inputRef.current.value = '')
  }

  return (
    <section id="classify" className="relative w-full bg-gradient-to-b from-white to-emerald-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold text-emerald-900 md:text-4xl">Classify a pest</h2>
        <p className="mt-2 text-center text-emerald-800/80">Drag and drop an image or click to upload. Experience the four-stage flow.</p>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border-2 border-dashed border-emerald-200 bg-white p-10 text-center shadow-sm"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
              >
                <Upload className="mx-auto h-10 w-10 text-emerald-600" />
                <p className="mt-3 font-medium text-emerald-900">Drop your image here</p>
                <p className="text-sm text-emerald-800/70">PNG, JPG up to 10MB</p>
                <button
                  onClick={() => inputRef.current?.click()}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-5 py-2.5 text-white shadow hover:brightness-110"
                >
                  <ImageIcon className="h-4 w-4" /> Choose Image
                </button>
                <input ref={inputRef} onChange={onInput} type="file" accept="image/*" className="hidden" />
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <img src={preview} alt="preview" className="h-72 w-full rounded-xl object-cover" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900">Ready to classify</h3>
                      <p className="mt-1 text-sm text-emerald-800/70">We’ll analyze the image using our AI pipeline and show confidence and guidance.</p>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={simulateClassify} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">
                        <Scan className="h-4 w-4" /> Classify
                      </button>
                      <button onClick={reset} className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-800 hover:bg-emerald-200">
                        <X className="h-4 w-4" /> Reset
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div
                key="stage3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border border-emerald-100 bg-white p-10 text-center shadow"
              >
                <div className="flex flex-col items-center">
                  <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                  <p className="mt-3 font-medium text-emerald-900">Analyzing image...</p>
                  <p className="text-sm text-emerald-800/70">Optimized GPU pipeline for sub-3s turnaround</p>
                </div>
              </motion.div>
            )}

            {stage === 4 && result && (
              <motion.div
                key="stage4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <img src={preview} alt="result" className="h-72 w-full rounded-xl object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <h3 className="text-xl font-semibold text-emerald-900">{result.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-emerald-800/80">Confidence: <span className="font-semibold text-emerald-700">{Math.round(result.confidence * 100)}%</span> • Threat: <span className="rounded-full bg-red-100 px-2 py-0.5 text-red-700">{result.threat}</span></p>
                    <p className="mt-3 text-emerald-900/80">{result.summary}</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-emerald-50 p-3">
                        <p className="text-xs text-emerald-700/80">Organic</p>
                        <p className="text-sm font-medium text-emerald-900">Neem oil, Bt, parasitoids</p>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-3">
                        <p className="text-xs text-emerald-700/80">Chemical</p>
                        <p className="text-sm font-medium text-emerald-900">Spinosad, chlorantraniliprole</p>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-3">
                        <p className="text-xs text-emerald-700/80">Prevention</p>
                        <p className="text-sm font-medium text-emerald-900">Scout weekly, pheromone traps</p>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-3">
                        <p className="text-xs text-emerald-700/80">Next steps</p>
                        <p className="text-sm font-medium text-emerald-900">See related pests</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <a href="#directory" className="rounded-full bg-emerald-600 px-4 py-2 text-white">Open Directory</a>
                      <button onClick={reset} className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-800 hover:bg-emerald-200">Classify another</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
