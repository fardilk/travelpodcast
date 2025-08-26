
export default function PrivateTripInquiry() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Private Trip Inquiry</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Tell us about your objectives, preferred regions, group size, and time window.</p>
      <form className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Name" className="rounded-md border px-3 py-2 text-sm bg-background" />
          <input type="email" placeholder="Email" className="rounded-md border px-3 py-2 text-sm bg-background" />
        </div>
        <textarea placeholder="Trip goals / notes" rows={5} className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Submit</button>
      </form>
    </main>
  )
}
