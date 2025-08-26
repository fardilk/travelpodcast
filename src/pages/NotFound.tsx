import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-28 text-center">
      <p className="text-xs uppercase tracking-wider text-primary font-medium">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted-foreground">The page you’re looking for doesn’t exist or has been moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="inline-flex items-center rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">Go home</Link>
        <Link to="/inquiry/share-story" className="inline-flex items-center rounded border px-5 py-2.5 text-sm font-medium hover:bg-muted">Share Story</Link>
      </div>
    </div>
  )
}
