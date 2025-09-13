import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import MainNav from '@/components/layout/MainNav'
import MobileNav from '@/components/layout/MobileNav'
import AboutMegaPanel from '@/components/layout/AboutMegaPanel'

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const navigate = useNavigate()
  return (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur transition-colors duration-300 group/header hover:bg-black hover:text-white" onMouseLeave={() => setOpenMenu(null)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-[5%]">
        <Link to="/" className={cn('inline-flex items-center focus:outline-none focus:ring-0 rounded-sm transition-colors group-hover/header:text-white border-0 p-0 bg-transparent', openMenu ? 'text-gold' : '')} aria-label="Go to home">
          <img src="/logo-langkah-liar.png" alt="Langkah Liar" className="h-8 w-auto block border-0" />
        </Link>
        <nav className="hidden md:block">
          <MainNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block"><Button size="sm" onClick={()=>navigate('/inquiry/private-trip')}>Daftarkan Cerita</Button></div>
          <div className="md:hidden"><MobileNav /></div>
        </div>
      </div>
      <AboutMegaPanel open={openMenu==='about'} onClose={()=>setOpenMenu(null)} />
    </header>
  )
}
