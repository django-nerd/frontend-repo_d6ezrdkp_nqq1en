import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Grid3x3, List, Sprout, AlertTriangle, X } from 'lucide-react'

const pests = [
  { id: 1, name: 'Fall Armyworm', category: 'Caterpillar', threat: 'High', img: 'https://images.unsplash.com/photo-1614854262343-1a2f40166f64?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Aphid', category: 'Sap-sucker', threat: 'Medium', img: 'https://images.unsplash.com/photo-1617291044087-071cf68a1d1a?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Whitefly', category: 'Sap-sucker', threat: 'Medium', img: 'https://images.unsplash.com/photo-1625415935648-00d9ea294c56?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Leaf Miner', category: 'Fly', threat: 'Low', img: 'https://images.unsplash.com/photo-1609592256446-3e8f302ff7f6?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Brown Marmorated Stink Bug', category: 'Bug', threat: 'High', img: 'https://images.unsplash.com/photo-1663511409906-9f61da48b0d3?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Spider Mite', category: 'Mite', threat: 'Medium', img: 'https://images.unsplash.com/photo-1619532782665-52eed2eb06fa?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Thrips', category: 'Thrips', threat: 'Medium', img: 'https://images.unsplash.com/photo-1620360284502-312b4a29e2df?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Cutworm', category: 'Caterpillar', threat: 'High', img: 'https://images.unsplash.com/photo-1525446922787-35ea470e80f4?q=80&w=1200&auto=format&fit=crop' },
  { id: 9, name: 'Colorado Potato Beetle', category: 'Beetle', threat: 'High', img: 'https://images.unsplash.com/photo-1622068291765-32bd07b43835?q=80&w=1200&auto=format&fit=crop' },
  { id: 10, name: 'Flea Beetle', category: 'Beetle', threat: 'Low', img: 'https://images.unsplash.com/photo-1534351579585-ea8e07aa6613?q=80&w=1200&auto=format&fit=crop' },
  { id: 11, name: 'Corn Earworm', category: 'Caterpillar', threat: 'Medium', img: 'https://images.unsplash.com/photo-1589965242669-8112f6bdeb5b?q=80&w=1200&auto=format&fit=crop' },
  { id: 12, name: 'Mealybug', category: 'Bug', threat: 'Low', img: 'https://images.unsplash.com/photo-1589965241148-8a2f7fbc04ee?q=80&w=1200&auto=format&fit=crop' },
]

const categories = ['All', 'Caterpillar', 'Sap-sucker', 'Fly', 'Bug', 'Mite', 'Thrips', 'Beetle']
const threats = ['All', 'Low', 'Medium', 'High']

export default function Directory() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [thr, setThr] = useState('All')
  const [view, setView] = useState('grid')
  const [modal, setModal] = useState(false)

  const filtered = useMemo(() => {
    return pests.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (thr === 'All' || p.threat === thr) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, cat, thr])

  return (
    <section id="directory" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold text-emerald-900 md:text-4xl">Pest Directory</h2>
          <div className="flex gap-2">
            <button onClick={() => setView('grid')} className={`rounded-full px-3 py-1.5 text-sm ${view==='grid'?'bg-emerald-600 text-white':'bg-emerald-100 text-emerald-800'}`}><Grid3x3 className="mr-1 inline h-4 w-4"/> Grid</button>
            <button onClick={() => setView('list')} className={`rounded-full px-3 py-1.5 text-sm ${view==='list'?'bg-emerald-600 text-white':'bg-emerald-100 text-emerald-800'}`}><List className="mr-1 inline h-4 w-4"/> List</button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/70" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search pests..." className="rounded-full border border-emerald-200 bg-white pl-9 pr-4 py-2 outline-none ring-emerald-300 focus:ring" />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-emerald-700"/>
            <select value={cat} onChange={(e)=>setCat(e.target.value)} className="rounded-full border border-emerald-200 bg-white px-3 py-2">
              {categories.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={thr} onChange={(e)=>setThr(e.target.value)} className="rounded-full border border-emerald-200 bg-white px-3 py-2">
              {threats.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button onClick={()=>setModal(true)} className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-4 py-2 text-white shadow">
            <Sprout className="h-4 w-4"/> Custom Search
          </button>
        </div>

        <div className={`mt-8 grid gap-6 ${view==='grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -4 }} className={`overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow ${view==='list'?'grid grid-cols-[180px_1fr]':''}`}>
              <img src={p.img} alt={p.name} className={`${view==='list'?'h-full w-[180px]':'h-44 w-full'} object-cover`} />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-emerald-900">{p.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${p.threat==='High'?'bg-red-100 text-red-700':p.threat==='Medium'?'bg-amber-100 text-amber-700':'bg-emerald-100 text-emerald-700'}`}>{p.threat}</span>
                </div>
                <p className="mt-1 text-sm text-emerald-800/80">{p.category}</p>
                <div className="mt-3 flex gap-2">
                  <a href="#detail" className="rounded-full bg-emerald-600 px-3 py-1.5 text-sm text-white">Quick view</a>
                  <a href="#detail" className="rounded-full bg-emerald-100 px-3 py-1.5 text-sm text-emerald-800">Open detail</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {modal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-6 backdrop-blur">
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-emerald-900">AI Custom Search</h3>
                  <button onClick={()=>setModal(false)} className="rounded-full p-1 hover:bg-emerald-50"><X className="h-5 w-5"/></button>
                </div>
                <p className="mt-1 text-emerald-800/80">Describe or paste a name. We’ll validate and synthesize details beyond the default 12 pests.</p>
                <textarea rows={4} placeholder="e.g., spotted lanternfly on young grapevines" className="mt-4 w-full rounded-xl border border-emerald-200 p-3 outline-none ring-emerald-300 focus:ring" />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-700"><AlertTriangle className="h-4 w-4"/> Experimental</div>
                  <button className="rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-4 py-2 text-white">Generate</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
