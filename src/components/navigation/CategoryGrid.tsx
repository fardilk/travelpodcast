import React from 'react'
import { cn } from '@/lib/utils'

export interface CategoryItem {
  title: string
  description?: string
  href: string
}

interface CategoryGridProps {
  items: CategoryItem[]
  className?: string
  columns?: number
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ items, className, columns = 3 }) => {
  return (
    <div className={cn('grid gap-6', columns === 2 && 'sm:grid-cols-2', columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map(item => (
        <a key={item.href} href={item.href} className="group block rounded-md border p-4 transition-colors hover:bg-accent">
          <h3 className="font-medium text-sm tracking-wide uppercase text-foreground group-hover:text-primary">{item.title}</h3>
          {item.description && <p className="mt-2 text-xs text-muted-foreground line-clamp-3">{item.description}</p>}
        </a>
      ))}
    </div>
  )
}
