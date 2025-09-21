import { CategoryGrid } from '@/components/navigation/CategoryGrid'
import { TopPicksBanner, PodcasterStoriesGrid, EnsiklopediTravelerGrid, InsightLangkahLiarGrid, NewArticles } from '@/components/ui/article/Grid'
import { samplePodcasterStories, sampleEnsiklopediTraveler, sampleInsightLangkahLiar } from '@/components/ui/article/classification'

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
      {/* 1. Banner (Top picks) */}
      <TopPicksBanner items={samplePodcasterStories} />

      {/* 2. Grids */}
      <PodcasterStoriesGrid items={samplePodcasterStories} title="Podcaster Stories" />
      <EnsiklopediTravelerGrid items={sampleEnsiklopediTraveler} title="Ensiklopedi Traveler" />
      <InsightLangkahLiarGrid items={sampleInsightLangkahLiar} title="Insight Langkah Liar" />

      {/* 3. New Articles - simple amalgam of samples for now */}
      <NewArticles items={[...samplePodcasterStories.slice(1), ...sampleEnsiklopediTraveler.slice(0, 2), ...sampleInsightLangkahLiar.slice(0, 1)]} />

      {/* Provinces navigation (optional section) */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Jelajahi per Provinsi</h2>
        <div className="mt-4">
          <CategoryGrid items={provinces} />
        </div>
      </div>
    </main>
  )
}
