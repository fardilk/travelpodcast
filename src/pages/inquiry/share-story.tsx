
export default function ShareStory() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Share Your Story</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">We welcome field reports, reflective essays, and multimedia narratives highlighting place, people, and ecology.</p>
      <form className="mt-8 space-y-4">
        <input type="text" placeholder="Title" className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
        <textarea placeholder="Your story" rows={6} className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Submit</button>
      </form>
    </main>
  )
}
