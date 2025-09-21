import React from 'react'

type ImageBoxProps = {
  src?: string
  alt?: string
  // Tailwind height/width class or custom classes controlling box size
  heightClass?: string
  widthClass?: string
  // shape class: rounded-full, rounded-lg, etc.
  shapeClass?: string
  className?: string
  children?: React.ReactNode
}

export default function ImageBox({
  src = '/green-bg.png',
  alt = '',
  heightClass = 'h-52',
  widthClass = 'w-full',
  shapeClass = 'rounded-xl',
  className = '',
  children,
}: ImageBoxProps) {
  return (
    <div className={`relative overflow-hidden ${widthClass} ${heightClass} ${shapeClass} ring-2 ring-transparent ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {children}
    </div>
  )
}
