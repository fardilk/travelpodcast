import { ItemCard } from '@/components/navigation/ItemCard'
import { getTripsByType } from '@/data/trips'
const items = getTripsByType('heritage')

export default function HeritageTrips() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Heritage Trips</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Engage with living heritage, artisans, and ancestral landscapes.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(it => <ItemCard key={it.id} title={it.title} subtitle={it.subtitle} imageUrl={it.imageUrl} />)}
      </div>
    </main>
  )
}
