import Header from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t py-10 mt-24">
      <div className="mx-auto max-w-7xl px-4 text-sm text-muted-foreground flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="space-y-3 max-w-sm">
          <h4 className="font-semibold tracking-tight text-foreground">Langkah Liar</h4>
          <p className="text-xs leading-relaxed">Stories, knowledge, and responsible journeys across the Indonesian archipelago.</p>
          <p className="text-xs">© {new Date().getFullYear()} Langkah Liar.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-xs">
          <div>
            <h5 className="font-medium mb-2">Discover</h5>
            <ul className="space-y-1">
              <li><a href="/podcasts" className="hover:underline">Podcasts</a></li>
              <li><a href="/trips" className="hover:underline">Trips</a></li>
              <li><a href="/artikel" className="hover:underline">Artikel</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">About</h5>
            <ul className="space-y-1">
              <li><a href="/about#our-story" className="hover:underline">Our Story</a></li>
              <li><a href="/about#vision" className="hover:underline">Vision</a></li>
              <li><a href="/about#mission" className="hover:underline">Mission</a></li>
              <li><a href="/about#team" className="hover:underline">Team</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Engage</h5>
            <ul className="space-y-1">
              <li><a href="/inquiry/share-story" className="hover:underline">Share Story</a></li>
              <li><a href="/inquiry/private-trip" className="hover:underline">Private Trip</a></li>
              <li><a href="/inquiry/invest" className="hover:underline">Invest</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Follow</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
  <Header />
      <main className="pt-16 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
