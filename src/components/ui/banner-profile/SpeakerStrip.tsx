import { useCallback, useRef } from 'react'
import ImageBox from './ImageBox'

type Speaker = {
  id: string
  name: string
  role?: string
  img?: string
  href?: string
}

const defaultSpeakers: Speaker[] = [
  { id: 's1', name: 'Arif', role: 'Mountaineer', img: '/green-bg.png', href: '#' },
  { id: 's2', name: 'Sari', role: 'Travel Vlogger', img: '/green-bg.png', href: '#' },
  { id: 's3', name: 'Budi', role: 'Cultural Guide', img: '/green-bg.png', href: '#' },
]

export default function SpeakerStrip({ items = defaultSpeakers }: { items?: Speaker[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const container = containerRef.current
    if (!container) return
    const focusable = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[tabindex="0"]'))
    if (!focusable.length) return

    const current = document.activeElement as HTMLElement | null
    const idx = focusable.findIndex((el) => el === current)

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = focusable[(idx + 1) % focusable.length]
      next?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = focusable[(idx - 1 + focusable.length) % focusable.length]
      prev?.focus()
    }
  }, [])

  return (
    <div className="mt-3" onKeyDown={onKeyDown} ref={containerRef}>
      <div className="w-full">
        <div className="flex gap-4 items-stretch">
          {items.map((s) => (
            <a
              key={s.id}
              href={s.href ?? '#'}
              className="relative z-10 focus:z-20 group flex-1"
              aria-label={`${s.name}${s.role ? ` — ${s.role}` : ''}`}
              tabIndex={0}
              onClick={(e) => {
                if ((s.href ?? '#') === '#') e.preventDefault()
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click()
              }}
            >
                <ImageBox
                  src={s.img}
                  alt={s.name}
                  widthClass="w-full"
                  className="ring-2 ring-transparent group-focus-within:ring-neutral-300 ring-offset-2 transform transition-all duration-200 group-hover:scale-105 shadow-md"
                >
                  {s.role && (
                    <div className="absolute top-2 right-2 bg-neutral-900/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-neutral-200">
                      {s.role}
                    </div>
                  )}
                </ImageBox>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
