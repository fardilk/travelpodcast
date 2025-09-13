import { getEntriesByProvince } from '@/data/artikel'

export default function JawaEntries() {
  const items = getEntriesByProvince('jawa')
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Jawa</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">A sampling of articles and reference notes from Java’s rich cultural and natural landscapes.</p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {items.map((it) => (
          <article key={it.id} className="rounded-lg border p-4 bg-card">
            <h3 className="font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.snippet}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
