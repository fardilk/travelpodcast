import { ItemCard } from '@/components/navigation/ItemCard'
import { getEpisodesByTheme } from '@/data/podcasts'
const items = getEpisodesByTheme('socio-culture')

export default function SocioCulturePodcasts() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Socio-Culture Podcasts</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Engaging voices on community resilience and cultural innovation.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(it => <ItemCard key={it.id} title={it.title} subtitle={it.subtitle} imageUrl={it.imageUrl} />)}
      </div>
    </main>
  )
}
