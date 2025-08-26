import { CategoryGrid } from '@/components/navigation/CategoryGrid'

const provinces = [
  { title: 'Jawa', href: '/encyclopedia/jawa', description: 'Volcano chains, courtly heritage, dense cultural layers.' },
  { title: 'Sumatera', href: '/encyclopedia/sumatera', description: 'Rainforests, highland cultures, maritime legends.' },
  { title: 'Nusa Tenggara', href: '/encyclopedia/nusa-tenggara', description: 'Island ecologies and weaving traditions.' },
]

export default function EncyclopediaLanding() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Ensiklopedi</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Reference entries across Indonesia’s diverse provinces—geography, biodiversity, culture, and heritage assets.</p>
      <div className="mt-10">
        <CategoryGrid items={provinces} />
      </div>
    </main>
  )
}
