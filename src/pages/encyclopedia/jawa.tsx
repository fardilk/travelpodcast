
import { getEntriesByProvince } from '@/data/encyclopedia'
const entries = getEntriesByProvince('jawa')

export default function JawaEntries() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Ensiklopedi Jawa</h1>
      <ul className="mt-8 space-y-4">
        {entries.map(e => (
          <li key={e.id} className="rounded-md border p-4 hover:bg-accent">
            <h3 className="font-medium">{e.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.snippet}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
