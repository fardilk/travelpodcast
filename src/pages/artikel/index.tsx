import { CategoryGrid } from '@/components/navigation/CategoryGrid'

const provinces = [
  { title: 'Jawa', href: '/artikel/jawa', description: 'Volcano chains, courtly heritage, dense cultural layers.' },
  { title: 'Sumatera', href: '/artikel/sumatera', description: 'Rainforests, highland cultures, maritime legends.' },
  { title: 'Nusa Tenggara', href: '/artikel/nusa-tenggara', description: 'Island ecologies and weaving traditions.' },
]

export default function ArtikelLanding() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Artikel</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Reference entries across Indonesia’s diverse provinces—geography, biodiversity, culture, and heritage assets.</p>
      <div className="mt-10">
        <CategoryGrid items={provinces} />
      </div>
    </main>
  )
}
