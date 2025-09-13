import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { mainNavItems } from '@/data/navigation'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="h-5 w-5 stroke-black" /></Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate the site</SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-2">
          {mainNavItems.map(i => (
            <a key={i.key} className="block px-3 py-2" href={i.path}>{i.label}</a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
