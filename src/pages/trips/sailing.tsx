import { ItemCard } from '@/components/navigation/ItemCard'
import { getTripsByType } from '@/data/trips'
const items = getTripsByType('sailing')

export default function SailingTrips() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sailing Trips</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Navigate storied straits, coral-rich seas, and legendary archipelagic channels.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(it => <ItemCard key={it.id} title={it.title} subtitle={it.subtitle} imageUrl={it.imageUrl} />)}
      </div>
    </main>
  )
}
