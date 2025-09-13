export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 space-y-16">
      <section id="our-story">
        <h1 className="text-4xl font-semibold tracking-tight">About Us</h1>
  <p className="mt-4 text-muted-foreground max-w-prose">Langkah Liar is a platform amplifying place-based stories, responsible travel practices, and the cultural & ecological heritage of the Indonesian archipelago. We curate narratives, design conservation-positive trips, and build a knowledge commons through our artikel and podcast channels.</p>
      </section>

      <section id="vision">
        <h2 className="text-2xl font-semibold">Vision</h2>
        <p className="mt-2 text-muted-foreground max-w-prose">A future where exploration deepens guardianship: journeys strengthen local economies, preserve intangible heritage, and accelerate ecological regeneration.</p>
      </section>

      <section id="mission">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Document and circulate community-rooted narratives.</li>
          <li>Design trip frameworks that prioritize safety, reciprocity, and low impact.</li>
          <li>Facilitate knowledge-sharing between explorers, researchers, and local stewards.</li>
          <li>Channel capital and attention toward conservation-aligned initiatives.</li>
        </ul>
      </section>

      <section id="team">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: 'Ayu Pradana', role: 'Expedition Lead', bio: 'Designs alpine and cultural itineraries bridging safety and immersion.' },
            { name: 'Bima Santosa', role: 'Heritage Research', bio: 'Synthesizes oral history, archival, and field ethnography.' },
            { name: 'Clara Wijaya', role: 'Community Partnerships', bio: 'Builds long-term relationships with local guides and cooperatives.' },
            { name: 'Dimas Nugroho', role: 'Audio Producer', bio: 'Oversees podcast editorial and narrative structure.' },
            { name: 'Intan Maharani', role: 'Knowledge Curator', bio: 'Maintains structured artikel taxonomy and quality.' },
            { name: 'Raka Putra', role: 'Conservation Liaison', bio: 'Links expeditions with ecosystem restoration projects.' },
          ].map(p => (
            <div key={p.name} className="rounded-lg border p-4 bg-card">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{p.role}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
