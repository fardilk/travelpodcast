
import { getEntriesByProvince } from '@/data/artikel'
const items = getEntriesByProvince('sumatera')

export default function SumateraEntries() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sumatera — Artikel</h1>
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
