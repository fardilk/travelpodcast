import { CategoryGrid } from '@/components/navigation/CategoryGrid'

const inquiryLinks = [
  { title: 'Share Story', href: '/inquiry/share-story', description: 'Submit narratives, field notes, or community insights.' },
  { title: 'Private Trip', href: '/inquiry/private-trip', description: 'Design a bespoke itinerary with our team.' },
  { title: 'Invest Us', href: '/inquiry/invest', description: 'Support platform development and conservation partnerships.' },
]

export default function InquiryLanding() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Inquiry</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Reach out for collaborations, custom journeys, or to amplify local stories.</p>
      <div className="mt-10">
        <CategoryGrid items={inquiryLinks} />
      </div>
    </main>
  )
}
