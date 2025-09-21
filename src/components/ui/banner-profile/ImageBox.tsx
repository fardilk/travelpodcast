import React from 'react'
import { computeStyle } from '@/lib/imageBoxPosition'
import type { VAlign } from '@/lib/imageBoxPosition'

type ImageBoxProps = {
  src?: string
  alt?: string
  // Tailwind height/width class or custom classes controlling box size
  heightClass?: string
  widthClass?: string
  // shape class: rounded-full, rounded-lg, etc.
  shapeClass?: string
  // vertical alignment for the image content (affects translateY)
  vAlign?: VAlign
  className?: string
  children?: React.ReactNode
}

export default function ImageBox({
  src = '/green-bg.png',
  alt = '',
  heightClass = 'h-52',
  widthClass = 'w-full',
  shapeClass = 'rounded-xl',
  vAlign = 'center',
  className = '',
  children,
}: ImageBoxProps) {
  const style = computeStyle(vAlign)

  return (
    <div className={`relative overflow-hidden ${widthClass} ${heightClass} ${shapeClass} ring-2 ring-transparent ${className}`} style={style}>
  <img src={src} alt={alt} className="w-full h-full object-cover transform transition-transform duration-300" />
      {children}
    </div>
  )
}
