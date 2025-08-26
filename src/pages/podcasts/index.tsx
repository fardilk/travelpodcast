import { CategoryGrid } from '@/components/navigation/CategoryGrid'

const podcastThemes = [
  { title: 'Mountain', href: '/podcasts/mountain', description: 'Stories and conversations from high-altitude adventures.' },
  { title: 'Heritage', href: '/podcasts/heritage', description: 'Exploring cultural heritage and traditions.' },
  { title: 'Socio-Culture', href: '/podcasts/socio-culture', description: 'Social dynamics, communities, and cultural change.' },
]

export default function PodcastsLanding() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Podcasts</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Browse our growing library of themed podcast series featuring voices of explorers, historians, and local guardians of nature and culture.</p>
      <div className="mt-10">
        <CategoryGrid items={podcastThemes} />
      </div>
    </main>
  )
}
