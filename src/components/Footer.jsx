import { Sprout, Mail, Github } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="w-full bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-700"><Sprout className="h-6 w-6"/></span>
            <div>
              <p className="text-lg font-semibold">PestHub</p>
              <p className="text-emerald-100/80">AI-powered pest protection</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-emerald-100/90">
            <a href="#classify" className="hover:text-white">Classify</a>
            <a href="#directory" className="hover:text-white">Directory</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
          <div className="flex items-center gap-3 text-emerald-100/80">
            <a href="mailto:hello@pesthub.ai" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4"/> Contact</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4"/> Github</a>
          </div>
        </div>
        <div className="mt-8 text-sm text-emerald-100/70">© {new Date().getFullYear()} PestHub. All rights reserved.</div>
      </div>
    </footer>
  )
}
