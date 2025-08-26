import { CategoryGrid } from '@/components/navigation/CategoryGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const tripTypes = [
  { title: 'Hiking', href: '/trips/hiking', description: 'Guided treks, volcano ascents, and jungle traverses.' },
  { title: 'Sailing', href: '/trips/sailing', description: 'Archipelago expeditions and liveaboard voyages.' },
  { title: 'Heritage', href: '/trips/heritage', description: 'Immersive journeys into living cultural landscapes.' },
]

function TripsHero() {
  return (
    <section className="relative isolate grid min-h-[70vh] place-items-center bg-[url('https://images.unsplash.com/photo-1549880181-56a44cf4a9a1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl drop-shadow-lg">Curated Adventure Trips</h1>
        <p className="mt-4 text-balance text-lg/7 text-white/80">Safety-first itineraries that deepen your relationship with landscapes and culture.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button size="lg">Browse Types</Button>
          <Button size="lg" variant="secondary">Private Trip</Button>
        </div>
      </div>
    </section>
  )
}

function FeaturedTrips() {
  const items = [
    { title: 'Volcanic Traverse', text: 'Multi-summit journey across active cones.' },
    { title: 'Island Passage', text: 'Sailing & trekking hybrid in coral triangle.' },
    { title: 'Cultural Highlands', text: 'Heritage immersion with local stewards.' },
  ]
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold md:text-3xl">Featured Expeditions</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
            <Card key={it.title} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 will-change-transform hover:-translate-y-1">
              <div className="aspect-[4/3] bg-muted" />
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                <Button variant="link" className="mt-2 px-0">Learn more →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TripsLanding() {
  return (
    <>
      <TripsHero />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Trip Categories</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">Set out on curated adventures balancing safety, authenticity, and meaningful connection to place.</p>
        <div className="mt-10">
          <CategoryGrid items={tripTypes} />
        </div>
      </main>
      <FeaturedTrips />
    </>
  )
}
