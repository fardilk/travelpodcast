import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation'
import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

function Header() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur transition-colors duration-300 group/header hover:bg-black hover:text-white" onMouseLeave={() => setOpenMenu(null)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
  <Link to="/" className={cn('font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors group-hover/header:text-white', openMenu ? 'text-gold' : '')} aria-label="Go to home">Suara Pejalan</Link>
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {[
                { label:'About Us', key:'about', path:'/about', hoverOpens:true },
                { label:'Tayangan', key:'podcasts', path:'/podcasts' },
                { label:'Ensiklopedi', key:'encyclopedia', path:'/encyclopedia' },
                { label:'Trip', key:'trips', path:'/trips' },
                { label:'Inquiry', key:'inquiry', path:'/inquiry' },
                { label:'Shop', key:'shop', path:'/shop' },
              ].map(item => (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuTrigger
                    onMouseEnter={() => item.hoverOpens ? setOpenMenu('about') : setOpenMenu(null)}
                    onFocus={() => item.hoverOpens ? setOpenMenu('about') : setOpenMenu(null)}
                    aria-expanded={item.key==='about' ? openMenu==='about' : undefined}
                    aria-controls={item.key==='about' && openMenu==='about' ? 'mega-about' : undefined}
                    aria-current={location.pathname.startsWith(item.path) ? 'page' : undefined}
                    className={cn(
                      (location.pathname.startsWith(item.path) || (item.key==='about' && openMenu==='about')) && 'bg-black text-gold is-active'
                    )}
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block"><Button size="sm" onClick={()=>navigate('/inquiry/private-trip')}>Enquire</Button></div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="h-5 w-5" /></Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate the site</SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-2">
                  <a className="block px-3 py-2" href="/about">About Us</a>
                  <a className="block px-3 py-2" href="/podcasts">Tayangan</a>
                  <a className="block px-3 py-2" href="/encyclopedia">Ensiklopedi</a>
                  <a className="block px-3 py-2" href="/trips">Trip</a>
                  <a className="block px-3 py-2" href="/inquiry">Inquiry</a>
                  <a className="block px-3 py-2" href="/shop">Shop</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
  {openMenu==='about' && (
    <div id="mega-about" className="absolute left-0 top-full w-full z-40 bg-black text-white shadow-lg" role="region" aria-label="About menu panel">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12">
              <div className="col-span-3 pt-[6em] pl-[3em]">
        <ul className="space-y-4 text-sm font-medium text-white/90" role="menu">
                  {[
                    { id:'our-story', label:'Our Story' },
                    { id:'vision', label:'Vision' },
                    { id:'mission', label:'Mission' },
                    { id:'team', label:'Our Team' },
                  ].map(s => (
                    <li key={s.id} role="none">
          <a role="menuitem" href={`/about#${s.id}`} className="block text-white/90 hover:text-gold" onClick={()=> setOpenMenu(null)}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-5 pt-[6em]">
                <h3 className="text-white text-lg font-semibold">About Suara Pejalan</h3>
        <p className="mt-4 text-neutral-300 max-w-prose">Suara Pejalan began as a small group of passionate hikers and storytellers, committed to exploring local trails while preserving cultural narratives and nature for future generations.</p>
              </div>
              <div className="col-span-4 pt-[6em] pr-6 flex gap-6">
                <div className="w-1/2 aspect-[3/4] bg-muted" />
                <div className="w-1/2 aspect-[3/4] bg-muted" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t py-10 mt-24">
      <div className="mx-auto max-w-7xl px-4 text-sm text-muted-foreground flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="space-y-3 max-w-sm">
          <h4 className="font-semibold tracking-tight text-foreground">Suara Pejalan</h4>
          <p className="text-xs leading-relaxed">Stories, knowledge, and responsible journeys across the Indonesian archipelago.</p>
          <p className="text-xs">© {new Date().getFullYear()} Suara Pejalan.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-xs">
          <div>
            <h5 className="font-medium mb-2">Discover</h5>
            <ul className="space-y-1">
              <li><a href="/podcasts" className="hover:underline">Podcasts</a></li>
              <li><a href="/trips" className="hover:underline">Trips</a></li>
              <li><a href="/encyclopedia" className="hover:underline">Ensiklopedi</a></li>
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
