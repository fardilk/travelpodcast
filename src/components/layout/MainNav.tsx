import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation'
import { mainNavItems } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { useLocation, useNavigate } from 'react-router-dom'

export interface MainNavProps {
  openMenu: string | null
  setOpenMenu: (key: string | null) => void
}

export function MainNav({ openMenu, setOpenMenu }: MainNavProps) {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainNavItems.map(item => (
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
  )
}

export default MainNav
