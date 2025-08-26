import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ImageCardProps {
  image?: string
  fallbackImage?: string
  badge?: string
  title: string
  subtitle?: string
  ctaLabel?: React.ReactNode
  ctaHref?: string
  aspect?: 'portrait' | 'landscape' | 'square'
  className?: string
}

const aspectMap: Record<NonNullable<ImageCardProps['aspect']>, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square'
}

export function ImageCard({ image, fallbackImage, badge, title, subtitle, ctaLabel = 'Learn more', ctaHref = '#', aspect = 'portrait', className }: ImageCardProps) {
  const [loaded, setLoaded] = React.useState(false)
  const [src, setSrc] = React.useState(image || fallbackImage)
  return (
    <Card className={`group h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-1 ${className || ''}`}>
      <div className={`relative w-full overflow-hidden bg-muted ${aspectMap[aspect]}`}>
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
        {src && (
          <img
            src={src}
            alt={title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => { if (fallbackImage && src !== fallbackImage) setSrc(fallbackImage) }}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {badge && <span className="absolute left-2 top-2 inline-flex items-center rounded bg-black/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white shadow">{badge}</span>}
      </div>
      <CardContent className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-base leading-snug line-clamp-2">{title}</h3>
        {subtitle && <p className="mt-2 text-xs text-muted-foreground line-clamp-3 flex-1">{subtitle}</p>}
        {ctaLabel && (
          <Button asChild size="sm" variant="link" className="px-0 mt-2 self-start">
            <a href={ctaHref} className="inline-flex items-center gap-1">{ctaLabel} <span aria-hidden>→</span></a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
