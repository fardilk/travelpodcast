import type { ReactNode } from 'react'
import ImageBox from './ImageBox'

type OneStripProps = {
  /** Image source URL. If omitted, falls back to the CDN image provided by the user. */
  src?: string
  title?: string
  subtitle?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: string
  children?: ReactNode
}

const DEFAULT_SRC = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/ll/pakde-wiro-langkah-liar.JPG'

const DEFAULT_HREF = 'https://youtu.be/lfi52Tb3ZmQ?si=OKbjpNWM5K31szyl'

export default function OneStrip({ src = DEFAULT_SRC, title, subtitle, href = DEFAULT_HREF, size = 'md', rounded = 'rounded-xl', children }: OneStripProps) {
  const sizeClass = size === 'sm' ? 'h-40' : size === 'lg' ? 'h-64' : 'h-52'

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <ImageBox src={src} alt={title ?? ''} heightClass={sizeClass} shapeClass={rounded} className="overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute left-3 bottom-3 text-white">
          {title && <div className="text-sm font-semibold leading-snug">{title}</div>}
          {subtitle && <div className="text-xs text-neutral-200 mt-1">{subtitle}</div>}
        </div>
        {children}
      </ImageBox>
    </a>
  )
}