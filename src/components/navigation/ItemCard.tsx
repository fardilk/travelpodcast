import React from 'react'
import { cn } from '@/lib/utils'

interface ItemCardProps {
  title: string
  subtitle?: string
  imageUrl?: string
  href?: string
  className?: string
}

export const ItemCard: React.FC<ItemCardProps> = ({ title, subtitle, imageUrl, href = '#', className }) => {
  const content = (
    <div className={cn('overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition hover:shadow-md', className)}>
      <div className="aspect-[4/3] w-full bg-muted relative">
        {imageUrl && <img src={imageUrl} alt={title} className="h-full w-full object-cover" />}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        {subtitle && <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{subtitle}</p>}
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
}
