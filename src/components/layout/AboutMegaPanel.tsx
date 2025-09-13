import { aboutSections } from '@/data/navigation'

export interface AboutMegaPanelProps {
  open: boolean
  onClose: () => void
}

export function AboutMegaPanel({ open, onClose }: AboutMegaPanelProps) {
  if (!open) return null
  return (
    <div id="mega-about" className="absolute left-0 top-full w-full z-40 bg-black text-white shadow-lg" role="region" aria-label="About menu panel">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12">
          <div className="col-span-3 pt-[6em] pl-[3em]">
            <ul className="space-y-4 text-sm font-medium text-white/90" role="menu">
              {aboutSections.map(s => (
                <li key={s.id} role="none">
                  <a role="menuitem" href={`/about#${s.id}`} className="block text-white/90 hover:text-gold" onClick={onClose}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 pt-[6em]">
            <h3 className="text-white text-lg font-semibold">Tentang Langkah Liar</h3>
            <p className="mt-4 text-neutral-300 max-w-prose">Langkah Liar adalah komunitas pendaki dan pencerita yang tumbuh dari semangat menjelajahi jalur lokal, sembari merangkai kisah budaya dan menjaga kelestarian alam untuk generasi berikutnya.</p>
          </div>
          <div className="col-span-4 pt-[6em] pr-6 flex gap-6">
            <div className="w-1/2 aspect-[3/4] bg-muted" />
            <div className="w-1/2 aspect-[3/4] bg-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMegaPanel
